-- Execute no SQL Editor do Supabase. Nunca use a service_role key no navegador.
create table if not exists public.player_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  game_state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.player_progress enable row level security;
revoke all on public.player_progress from anon;
grant select, insert, update on public.player_progress to authenticated;
drop policy if exists "players_read_own" on public.player_progress;
create policy "players_read_own" on public.player_progress for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "players_insert_own" on public.player_progress;
create policy "players_insert_own" on public.player_progress for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "players_update_own" on public.player_progress;
create policy "players_update_own" on public.player_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
-- ATENÇÃO: pontuações de estado enviadas pelo navegador não são confiáveis para ranking público/premiação.
