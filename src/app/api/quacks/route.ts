import { NextResponse } from 'next/server';

import { sql } from '@/lib/db';

function isAuthorized(request: Request): boolean {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '').trim();
  return token === process.env.ADMIN_TOKEN;
}

export async function GET() {
  try {
    const quacks = await sql`
      SELECT id, message, created_at
      FROM quacks
      ORDER BY created_at DESC
      LIMIT 20
    `;
    return NextResponse.json(quacks);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch quacks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const message = body?.message?.trim();

  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  try {
    const [quack] = await sql`
      INSERT INTO quacks (message) VALUES (${message}) RETURNING id, message, created_at
    `;
    return NextResponse.json(quack, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create quack' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const { id, message } = body ?? {};
  const trimmed = message?.trim();

  if (!id || !trimmed) {
    return NextResponse.json({ error: 'ID and message are required' }, { status: 400 });
  }

  try {
    const [quack] = await sql`
      UPDATE quacks SET message = ${trimmed} WHERE id = ${id} RETURNING id, message, created_at
    `;
    return NextResponse.json(quack);
  } catch {
    return NextResponse.json({ error: 'Failed to update quack' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const { id } = body ?? {};

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    await sql`DELETE FROM quacks WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete quack' }, { status: 500 });
  }
}
