import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sql } from '@/lib/db';

import { Quack } from './quack';

type QuackRow = {
  id: number;
  message: string;
  created_at: string;
};

export async function Quacks() {
  let quacks: QuackRow[] = [];

  try {
    quacks = (await sql`
      SELECT id, message, created_at
      FROM quacks
      ORDER BY created_at DESC
      LIMIT 20
    `) as QuackRow[];
  } catch {
    // Silently fail — show empty state
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-normal tracking-tight">
          <div className="border-primary mr-2 rounded-full border-2 p-1">
            <Avatar>
              <AvatarImage
                src="https://ca.slack-edge.com/TC3FUBR9A-U05G4CYTNE8-495606ea2d2a-512"
                alt="Quacks avatar"
              />
              <AvatarFallback>:)</AvatarFallback>
            </Avatar>
          </div>
          Quacks
        </CardTitle>
        <CardDescription>Momentary lapse of reason</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {quacks.length === 0 ? (
          <p className="text-muted-foreground text-sm">No quacks yet.</p>
        ) : (
          quacks.map((q) => <Quack key={q.id} message={q.message} timestamp={q.created_at} />)
        )}
      </CardContent>
    </Card>
  );
}
