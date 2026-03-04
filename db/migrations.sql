-- Run this in your Neon console or via psql to create the now_items table.
-- The NowSection component falls back to site.ts values until this migration is run.

CREATE TABLE now_items (
  id       SERIAL PRIMARY KEY,
  text     TEXT    NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Optional: seed with your current site.ts values so the UI isn't empty on first load.
-- After seeding, manage items exclusively through /admin.
INSERT INTO now_items (text, position) VALUES
  ('Working on autonomous agent workflows', 0),
  ('Tuning model routing and reliability',  1),
  ('Building a durable personal site',      2);
