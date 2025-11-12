# listee-web

Listee’s web client built with Next.js App Router. It consumes the shared `@listee/*` packages so the UI stays aligned with the API and CLI.

## Requirements

- Bun 1.2.22+ for dependency management (`bun install`, `bun run dev`)
- Node.js 20+ (required by Next.js 15)
- Environment variables such as `NEXT_PUBLIC_LISTEE_API_URL` pointing to your Listee API host

## Local Development

```bash
bun install
bun run dev          # http://localhost:3000
bun run lint         # Biome
bun run build        # production bundle
```

Pages live under `src/app`. Keep shared UI primitives in `src/components` (to be added) so they can be reused across routes.

## Contributing

- Keep documentation and comments in English.
- Run `bun run lint` and `bun run build` before opening a PR.
- Follow Listee org conventions (Biome, Bun, Changesets) and avoid committing secrets.
