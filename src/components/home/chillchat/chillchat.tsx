'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const STARTER_QUESTIONS = [
  "What do you actually do for work?",
  "What's your weirdest hobby?",
  "What's your hot take on AI right now?",
  'What are you building these days?',
  'Coffee or something stronger?',
  'What would Bort say about you?',
  "What's the last thing that made you laugh?",
  'Are you a morning person or a chaos gremlin?',
  "What's your go-to comfort show?",
  'If you could automate one thing in your life, what would it be?',
  "What's a skill you're quietly proud of?",
  'What does a good day look like for you?',
];

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function ChillChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [startersSeen, setStartersSeen] = useState(false);

  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);

  const starterChips = useMemo(() => shuffle(STARTER_QUESTIONS).slice(0, 8), []);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function handleSend(messageOverride?: string) {
    const outgoing = (messageOverride ?? input).trim();
    if (!outgoing || loading) return;

    setStartersSeen(true);
    setLoading(true);
    setError('');
    setInput('');

    setMessages((prev) => [...prev, { role: 'user', content: outgoing }, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: outgoing }] }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong.');
        setMessages((prev) => prev.slice(0, -2));
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let buffer = '';

      while (!done) {
        const result = await reader.read();
        done = result.done;
        buffer += decoder.decode(result.value || new Uint8Array(), { stream: !done });

        if (buffer) {
          setMessages((prev) => {
            const next = [...prev];
            const lastIndex = next.length - 1;
            if (lastIndex >= 0 && next[lastIndex].role === 'assistant') {
              next[lastIndex] = {
                ...next[lastIndex],
                content: buffer,
              };
            }
            return next;
          });
        }
      }
    } catch {
      setError('Could not reach the server. Try again.');
      setMessages((prev) => prev.slice(0, -2));
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
      <CardContent className="space-y-4">
        {!startersSeen && (
          <div className="flex flex-wrap gap-2">
            {starterChips.map((starter) => (
              <button
                key={starter}
                type="button"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-3 py-1 text-xs transition-transform duration-150 hover:scale-[1.02]"
                onClick={() => handleSend(starter)}
                disabled={loading}
              >
                {starter}
              </button>
            ))}
          </div>
        )}
        <div className="bg-secondary/30 max-h-[240px] space-y-3 overflow-y-auto rounded-md p-3 text-sm">
          {messages.length === 0 && (
            <p className="text-muted-foreground">Ask me anything or pick a starter.</p>
          )}
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={
                message.role === 'user'
                  ? 'flex justify-end'
                  : 'flex justify-start'
              }
            >
              <div
                className={
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground max-w-[80%] rounded-lg px-3 py-2'
                    : 'bg-secondary max-w-[80%] rounded-lg px-3 py-2'
                }
                role={message.role === 'assistant' ? 'status' : undefined}
                aria-live={message.role === 'assistant' ? 'polite' : undefined}
              >
                {message.content || (loading && message.role === 'assistant' ? '…' : '')}
              </div>
            </div>
          ))}
          <div ref={scrollAnchorRef} />
        </div>
        {error && (
          <p className="text-destructive text-sm" role="alert">
            {error}
          </p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
          <Textarea
            className="bg-secondary h-[42px] min-h-[42px] w-full"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <Button onClick={() => handleSend()} disabled={loading || !input.trim()}>
            {loading ? '...' : 'Send'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
