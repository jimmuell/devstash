# Current Feature

Mock Data File

## Status

Completed

## Goals

Create a single source of truth for mock data to use for the dashboard UI until
the database is implemented.

- New file at `src/lib/mock-data.ts`
- Covers items, collections, item types and the current logged-in user
- Shape follows the Prisma draft in `project-overview.md`, trimmed to what the
  dashboard in `context/screenshots/dashboard-ui-main.png` actually renders
- Plain exported data only — no helper functions, no fetching, no complexity

## Notes

- Exports are `mockUser`, `mockItemTypes`, `mockCollections`, `mockItems` and
  `mockItemTypeCounts`. Types are declared in the same file and exported with the
  data so the UI has one import.
- `mockItemTypeCounts` is kept separate from `mockItemTypes` for the stats
  component above the collection cards.
- Counts on types and collections are display values taken from the mockup; they
  intentionally do not equal `mockItems.length`, which only holds enough entries
  to populate the pinned/recent sections.
- Dates are ISO strings so the data crosses the server/client boundary cleanly.
- Icons are stored as lucide icon names for when shadcn/ui is added.
- Demo user email is `demo@devstash.io`, used throughout the course.

## History

<!-- Keep this updated. Earliest to latest -->

- Next.js 16 bootstrap with Tailwind v4, src directory and React Compiler
- Project setup and boilerplate cleanup
- Context files and CLAUDE.md added, committed and pushed to GitHub
- Dashboard UI prototype generated in v0; screenshots saved to context/screenshots and referenced in project-overview.md
- Mock data file added at src/lib/mock-data.ts as the single source of truth for the dashboard UI
