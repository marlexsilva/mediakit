# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploying to Vercel & Verifying Analytics

1) Connect repository to Vercel

- On vercel.com click **New Project** → import your GitHub repository (this repo is already pushed).
- Vercel will build using `npm run build` by default.

2) Consent-first analytics (already implemented)

- This project dynamically imports analytics (`@vercel/analytics`) and `@vercel/speed-insights` only after the user grants `preferences.analytics` consent in the cookie banner. This keeps tracking disabled until explicit consent is given.

3) Verify Analytics on Deployment

- Deploy to Vercel and visit the live URL (open in an incognito window without adblockers).
- Navigate a few pages; wait ~30s and check the Vercel Analytics / Speed Insights dashboard in your Vercel project.

4) Optional: deploy via Vercel CLI

If you prefer to deploy from this machine, install the Vercel CLI and login first:

```bash
npx vercel login
npx vercel --prod
```

To run the deploy non-interactively you can provide a token:

```bash
npx vercel --token $VERCEL_TOKEN --prod
```

5) Notes about images

- Generated image variants (400w/800w + WebP) are produced by `scripts/generate-images.js`. The CI workflow now runs this script before the build, so you can keep the repository light. Generated files are ignored via `.gitignore`.

6) CI and audits

- The repository contains a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs `npm ci`, generates images, lints, builds, runs Lighthouse CI and an automated a11y scan (`pa11y`). Check the workflow run logs in GitHub after pushing changes.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
