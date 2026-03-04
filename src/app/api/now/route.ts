import { NextResponse } from 'next/server';

import { sql } from '@/lib/db';

function isAuthorized(request: Request): boolean {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '').trim();
  return token === process.env.ADMIN_TOKEN;
}

export async function GET() {
  try {
    const items = await sql`SELECT id, text FROM now_items ORDER BY position ASC, id ASC`;
    return NextResponse.json(items);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch now items' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const text = body?.text?.trim();

  if (!text) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }

  try {
    const [item] = await sql`
      INSERT INTO now_items (text, position)
      SELECT ${text}, COALESCE(MAX(position) + 1, 0) FROM now_items
      RETURNING id, text
    `;
    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create now item' }, { status: 500 });
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
    await sql`DELETE FROM now_items WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete now item' }, { status: 500 });
  }
}
