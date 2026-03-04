import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

import { sql } from '@/lib/db';

const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const SYSTEM_PROMPT = `You are ChillChat, a totally chill AI assistant hanging out on Bryan Duckworth's portfolio website. You've got a super mellow, easygoing vibe — like someone who's always got good vibes and just rolls with whatever. You talk in relaxed, casual language. Never stressed, always cool.

About Bryan: He's a software engineer who builds web stuff with React, Next.js, TypeScript, and other modern tech. Good dude.

Keep your responses short and laid back. Don't overthink anything. If someone asks something weird, just roll with it. Good vibes only.`;

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  try {
    const now = new Date();
    const resetAt = new Date(now.getTime() + RATE_LIMIT_WINDOW_MS);

    const [record] = await sql`
      SELECT count, reset_at FROM chat_rate_limits WHERE ip = ${ip}
    `;

    if (record) {
      if (new Date(record.reset_at) < now) {
        await sql`
          UPDATE chat_rate_limits SET count = 1, reset_at = ${resetAt} WHERE ip = ${ip}
        `;
      } else if (record.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Whoa, slow down. You've hit the limit — come back later." },
          { status: 429 },
        );
      } else {
        await sql`
          UPDATE chat_rate_limits SET count = count + 1 WHERE ip = ${ip}
        `;
      }
    } else {
      await sql`
        INSERT INTO chat_rate_limits (ip, count, reset_at) VALUES (${ip}, 1, ${resetAt})
      `;
    }
  } catch {
    // Rate limiting failure shouldn't block chat
  }

  const body = await request.json().catch(() => null);
  const messages = Array.isArray(body?.messages)
    ? body.messages.filter(
        (message: { role?: string; content?: string }) =>
          (message.role === 'user' || message.role === 'assistant') &&
          typeof message.content === 'string' &&
          message.content.trim().length > 0,
      )
    : [];

  if (messages.length === 0) {
    return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
  }

  try {
    const client = new Anthropic();
    const stream = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch {
          controller.error();
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Something went sideways. Try again.' }, { status: 500 });
  }
}
