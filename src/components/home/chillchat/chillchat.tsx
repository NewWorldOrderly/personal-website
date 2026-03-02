'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export function ChillChat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSend() {
    if (!input.trim() || loading) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }

      setResponse(data.message);
      setInput('');
    } catch {
      setError('Could not reach the server. Try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ChillChat.Online</CardTitle>
        <CardDescription>The most bodacious LLM on this side of the web</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {response && (
          <div className="bg-secondary rounded-md p-3 text-sm leading-relaxed">{response}</div>
        )}
        {error && <p className="text-destructive text-sm">{error}</p>}
        <div className="flex space-x-4">
          <Textarea
            className="bg-secondary h-[42px] min-h-[42px] w-full"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <Button onClick={handleSend} disabled={loading || !input.trim()}>
            {loading ? '...' : 'Send'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
