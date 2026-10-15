# FORGE V4 — Your Training, Your Rules

Mobile-first progressive web app. This update expands the previous FORGE project into an independent workout builder.

## Included
- Start an empty workout and add exercises during a session
- Exercise library: searchable, filterable, 100+ movements including stretching and cardio
- Exercise technique pages and user-configurable HTTPS video links (YouTube or MP4)
- Create, edit and launch reusable routines
- Personal measurable goals with progress check-ins
- Existing Phase 6 and Phase 7 programs, tracking, weight log, backup and restore retained
- All new data saved locally on the device in the existing `forge_mvp_v1` key

## Important limitations
- Videos are **not bundled**. Add verified exercise demonstration URLs per exercise; third-party video availability depends on provider and internet access.
- Exercise instructions for movements without a curated technique entry are generic, not exercise-specific coaching.
- Data does not sync between devices or users. Export backups frequently.
- This is an iterative PWA, not a fully tested production fitness platform.

## Deploy
Replace the six root files in your GitHub repository, commit to `main`, then let Vercel redeploy. Export your FORGE backup before updating.
