'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

type Quack = {
  id: number;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [authed, setAuthed] = useState(false);
  const [message, setMessage] = useState('');
  const [quacks, setQuacks] = useState<Quack[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function loadQuacks() {
    const res = await fetch('/api/quacks');
    const data = await res.json();
    setQuacks(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    if (authed) loadQuacks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setStatus('');

    const res = await fetch('/api/quacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: message.trim() }),
    });

    if (res.ok) {
      setMessage('');
      setStatus('Quacked!');
      loadQuacks();
    } else {
      const data = await res.json();
      setStatus(data.error || 'Failed to post quack.');
    }

    setLoading(false);
  }

  async function handleDelete(id: number) {
    await fetch('/api/quacks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
    loadQuacks();
  }

  if (!authed) {
    return (
      <main className="container mx-auto mt-12 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAuthed(true);
              }}
              className="space-y-4"
            >
              <input
                type="password"
                className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Admin token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <Button type="submit" disabled={!token}>
                Enter
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-12 max-w-2xl space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>New Quack</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind..."
              rows={3}
            />
            <div className="flex items-center gap-4">
              <Button type="submit" disabled={loading || !message.trim()}>
                {loading ? 'Posting...' : 'Quack'}
              </Button>
              {status && <span className="text-muted-foreground text-sm">{status}</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Quacks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quacks.length === 0 ? (
            <p className="text-muted-foreground text-sm">No quacks yet.</p>
          ) : (
            quacks.map((q, i) => (
              <div key={q.id}>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm">{q.message}</p>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(q.id)}>
                    Delete
                  </Button>
                </div>
                {i < quacks.length - 1 && <Separator className="mt-4" />}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </main>
  );
}
