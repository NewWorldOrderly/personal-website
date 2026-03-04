import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;

// Avoid throwing at module-load time during build/preview environments where DATABASE_URL
// may not be present. Call sites already handle failures (e.g. chat rate limit best-effort;
// quacks shows an empty state).
export const sql: typeof neon extends (url: string) => infer T
  ? T
  : never = databaseUrl
  ? neon(databaseUrl)
  : ((() => {
      throw new Error('DATABASE_URL is not set');
    }) as unknown as any);
