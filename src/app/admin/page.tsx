'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const MAX_QUACK_LENGTH = 280;

type Quack = {
  id: number;
  message: string;
  created_at: string;
};

type NowItem = {
  id: number;
  text: string;
};

type ChatStats = {
  total_ips: number;
  total_messages: number;
  max_by_single_ip: number;
  active_sessions: number;
};

export default function AdminPage() {
  const [token, setToken] = useState(() =>
    typeof window !== 'undefined' ? (sessionStorage.getItem('admin_token') ?? '') : ''
  );
  const [authed, setAuthed] = useState(() =>
    typeof window !== 'undefined' ? !!sessionStorage.getItem('admin_token') : false
  );
  const [message, setMessage] = useState('');
  const [quacks, setQuacks] = useState<Quack[]>([]);
  const [loading, setLoading] = useState(false);
  const [postStatus, setPostStatus] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editMessage, setEditMessage] = useState('');
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [nowItems, setNowItems] = useState<NowItem[]>([]);
  const [newNowText, setNewNowText] = useState('');
  const [stats, setStats] = useState<ChatStats | null>(null);

  const loadQuacks = useCallback(async () => {
    const res = await fetch('/api/quacks');
    const data = await res.json();
    setQuacks(Array.isArray(data) ? data : []);
  }, []);

  const loadNowItems = useCallback(async () => {
    const res = await fetch('/api/now');
    const data = await res.json();
    setNowItems(Array.isArray(data) ? data : []);
  }, []);

  const loadStats = useCallback(async (tok: string) => {
    const res = await fetch('/api/admin/stats', {
      headers: { Authorization: `Bearer ${tok}` },
    });
    if (res.ok) setStats(await res.json());
  }, []);

  // Load data on mount if already authenticated
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (authed && token) {
      loadQuacks();
      loadNowItems();
      loadStats(token);
    }
  }, [authed, token, loadQuacks, loadNowItems, loadStats]);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem('admin_token', token);
    setAuthed(true);
    loadQuacks();
    loadNowItems();
    loadStats(token);
  }

  function handleLogout() {
    sessionStorage.removeItem('admin_token');
    setToken('');
    setAuthed(false);
    setQuacks([]);
    setNowItems([]);
    setStats(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || message.length > MAX_QUACK_LENGTH) return;

    setLoading(true);
    setPostStatus('');

    const res = await fetch('/api/quacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ message: message.trim() }),
    });

    if (res.ok) {
      setMessage('');
      setPostStatus('Quacked!');
      loadQuacks();
    } else {
      const data = await res.json();
      setPostStatus(data.error || 'Failed to post quack.');
    }

    setLoading(false);
  }

  async function handleEdit(id: number) {
    if (!editMessage.trim() || editMessage.length > MAX_QUACK_LENGTH) return;

    const res = await fetch('/api/quacks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id, message: editMessage.trim() }),
    });

    if (res.ok) {
      setEditingId(null);
      setEditMessage('');
      loadQuacks();
    }
  }

  async function handleDelete(id: number) {
    await fetch('/api/quacks', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    setDeletingId(null);
    loadQuacks();
  }

  async function handleAddNow(e: React.FormEvent) {
    e.preventDefault();
    if (!newNowText.trim()) return;

    const res = await fetch('/api/now', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ text: newNowText.trim() }),
    });

    if (res.ok) {
      setNewNowText('');
      loadNowItems();
    }
  }

  async function handleDeleteNow(id: number) {
    await fetch('/api/now', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    loadNowItems();
  }

  if (!authed) {
    return (
      <main className="container mx-auto mt-12 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
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
    <main className="container mx-auto mt-12 max-w-2xl space-y-8 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin</h1>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Sign out
        </Button>
      </div>

      {/* New Quack */}
      <Card>
        <CardHeader>
          <CardTitle>New Quack</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind..."
                rows={3}
                maxLength={MAX_QUACK_LENGTH}
                className="pb-6"
              />
              <span
                className={cn('absolute right-2 bottom-2 text-xs text-muted-foreground', {
                  'text-destructive': message.length > MAX_QUACK_LENGTH * 0.9,
                })}
              >
                {message.length}/{MAX_QUACK_LENGTH}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={loading || !message.trim() || message.length > MAX_QUACK_LENGTH}
              >
                {loading ? 'Posting...' : 'Quack'}
              </Button>
              {postStatus && <span className="text-muted-foreground text-sm">{postStatus}</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Now Items */}
      <Card>
        <CardHeader>
          <CardTitle>Now Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleAddNow} className="flex gap-2">
            <input
              className="border-input bg-background grow rounded-md border px-3 py-2 text-sm"
              placeholder="What are you focused on..."
              value={newNowText}
              onChange={(e) => setNewNowText(e.target.value)}
            />
            <Button type="submit" disabled={!newNowText.trim()}>
              Add
            </Button>
          </form>
          {nowItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">No items yet. Add one above.</p>
          ) : (
            nowItems.map((item, i) => (
              <div key={item.id}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm">{item.text}</p>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteNow(item.id)}>
                    Delete
                  </Button>
                </div>
                {i < nowItems.length - 1 && <Separator className="mt-4" />}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Existing Quacks */}
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
                {editingId === q.id ? (
                  <div className="space-y-2">
                    <div className="relative">
                      <Textarea
                        value={editMessage}
                        onChange={(e) => setEditMessage(e.target.value)}
                        rows={3}
                        maxLength={MAX_QUACK_LENGTH}
                        className="pb-6"
                      />
                      <span className="text-muted-foreground absolute right-2 bottom-2 text-xs">
                        {editMessage.length}/{MAX_QUACK_LENGTH}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleEdit(q.id)}
                        disabled={!editMessage.trim()}
                      >
                        Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm">{q.message}</p>
                    {deletingId === q.id ? (
                      <div className="flex shrink-0 gap-1">
                        <Button variant="destructive" size="sm" onClick={() => handleDelete(q.id)}>
                          Confirm
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setDeletingId(null)}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <div className="flex shrink-0 gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingId(q.id);
                            setEditMessage(q.message);
                            setDeletingId(null);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setDeletingId(q.id);
                            setEditingId(null);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                {i < quacks.length - 1 && <Separator className="mt-4" />}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* ChillChat Stats */}
      {stats && (
        <Card>
          <CardHeader>
            <CardTitle>ChillChat Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide">Unique IPs</p>
                <p className="mt-1 text-2xl font-semibold">{stats.total_ips}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide">
                  Total Messages
                </p>
                <p className="mt-1 text-2xl font-semibold">{stats.total_messages}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide">
                  Active Sessions
                </p>
                <p className="mt-1 text-2xl font-semibold">{stats.active_sessions}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide">Max / IP</p>
                <p className="mt-1 text-2xl font-semibold">{stats.max_by_single_ip}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
