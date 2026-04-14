# Deployment Notes

ClientFlow currently runs in `demo` mode by default. That mode is intentional. It makes the project easy to clone, run, and review without external services.

## Modes

### Demo mode

Use this when:

- you want the product to work immediately after `npm install`
- you are showing the app as a frontend-heavy portfolio piece
- you do not want to provision backend services yet

Behavior:

- auth is simulated
- onboarding is stored locally
- clients and invoices persist in `localStorage`

### Supabase mode

Use this when:

- you are ready to connect real auth and database records
- you want deployment to behave like a true full-stack app

Set:

```bash
NEXT_PUBLIC_CLIENTFLOW_MODE=supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The current repository includes the configuration layer and browser client setup so the next migration can happen cleanly.

## Suggested Next Backend Steps

1. Add Supabase auth for sign-in and sign-up.
2. Create tables for `profiles`, `clients`, `projects`, and `invoices`.
3. Replace local client and invoice mutations with Supabase inserts and updates.
4. Add row-level security policies so each user only sees their own workspace data.
5. Add seeded records for demo accounts if you want a guided portfolio login.

## Deployment

For deployment, Vercel is the natural choice:

1. Import the GitHub repository.
2. Add the environment variables from `.env.example`.
3. Keep demo mode for the first deploy if you want a frictionless preview.
4. Switch to Supabase mode once the backend tables and auth flows are in place.
