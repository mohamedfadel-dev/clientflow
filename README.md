# ClientFlow

ClientFlow is a portfolio-grade Next.js project built to showcase modern product UI work in React.

The idea is simple: build a client portal and operations dashboard that looks like something a real agency, freelancer, or small SaaS team could use. It gives me room to show polished landing-page work, structured dashboard UI, responsive layouts, and eventually full-stack features like auth, database models, and real workflows.

## Current Scope

This first version includes:

- a branded marketing-style homepage
- a multi-page dashboard shell
- dedicated auth routes
- an onboarding flow
- create forms for clients and invoices
- edit flows for clients and invoices
- local persistent state for demo data and session
- protected app-style navigation behavior
- responsive layout and component styling
- product-oriented interface patterns like tables, badges, status cards, and action panels

## Routes

- `/`
  Landing page that explains the product and positions the project.
- `/dashboard`
  Overview page with metrics, account health, and task focus.
- `/dashboard/clients`
  Client list with owners, delivery state, and health markers.
- `/dashboard/clients/edit?id=...`
  Edit existing client records.
- `/dashboard/clients/new`
  Create-client form flow.
- `/dashboard/projects`
  Kanban-style project pipeline.
- `/dashboard/invoices`
  Billing and payment-state surface.
- `/dashboard/invoices/edit?id=...`
  Edit existing invoice records.
- `/dashboard/invoices/new`
  Create-invoice form flow.
- `/dashboard/settings`
  Workspace configuration UI.
- `/onboarding`
  First-run workspace setup.
- `/login`
  Sign-in screen.
- `/signup`
  Account creation screen.
- `/forgot-password`
  Password recovery screen.

## Stack

- Next.js 15
- React 19
- App Router
- custom CSS
- client-side state with localStorage persistence
- Supabase-ready configuration layer

## Why This Project Exists

I already have a fitness app, but that only shows one side of frontend work. ClientFlow is meant to show stronger product design instincts and a more professional React/Next.js skill set.

It is the project I want to grow into a proper full-stack portfolio piece.

## Next Steps

- add seeded data models for clients, projects, invoices, and tasks
- connect to a backend such as Supabase
- replace local demo persistence with real database-backed records
- add richer filters, search, and activity timeline UI
- add dark mode only if it improves the design
- deploy to Vercel

## Run Locally

```bash
npm install
npm run dev
```

By default the app runs in `demo` mode.

Copy `.env.example` to `.env.local` when you want to configure runtime variables.

## Build

```bash
npm run build
```

## Deployment Notes

See [docs/deployment.md](/home/fadali/clientflow/docs/deployment.md) for the current deployment and backend-integration path.
