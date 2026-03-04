import { NextResponse } from 'next/server';

import { sql } from '@/lib/db';

function isAuthorized(request: Request): boolean {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '').trim();
  return token === process.env.ADMIN_TOKEN;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [totals] = await sql`
      SELECT
        COUNT(*)::int AS total_ips,
        COALESCE(SUM(count), 0)::int AS total_messages,
        COALESCE(MAX(count), 0)::int AS max_by_single_ip
      FROM chat_rate_limits
    `;
    const [active] = await sql`
      SELECT COUNT(*)::int AS active_sessions
      FROM chat_rate_limits
      WHERE reset_at > NOW()
    `;
    return NextResponse.json({ ...totals, active_sessions: active.active_sessions });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
