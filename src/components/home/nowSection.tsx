import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sql } from '@/lib/db';
import { site } from '@/lib/site';

export async function NowSection() {
  let items: string[] = site.now;

  try {
    const rows = await sql`SELECT text FROM now_items ORDER BY position ASC, id ASC`;
    if (rows.length > 0) {
      items = rows.map((r: { text: string }) => r.text);
    }
  } catch {
    // Falls back to site.now if table doesn't exist yet
  }

  if (!items || items.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal tracking-tight">Now</CardTitle>
        <CardDescription>What I&apos;m focused on right now</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
