# Portfolio (A4 Landscape)

Multi-page portfolio built with React + Vite. Each page is designed for A4 landscape (297 x 210mm) and rendered as a PDF via Firebase Functions (Puppeteer).

## Stack

- React, Vite
- Firebase Auth
- Firebase Hosting + Functions (Gen2)

## Local setup

1) Install dependencies

```bash
npm install
```

2) Create `.env.local`

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

3) Run dev server

```bash
npm run dev
```

## PDF generation (Firebase Functions)

The PDF endpoint is `/api/pdf` and requires Firebase Auth.

1) Install function dependencies

```bash
cd functions
npm install
```

2) Configure environment variables (Functions)

Use either `.env` in `functions/` for local emulation or configure them in the Firebase console/CLI for production.

```
PDF_ALLOWED_EMAILS=you@example.com
PRINT_BASE_URL=https://your-project.web.app
```

3) Deploy

```bash
firebase deploy --only functions,hosting
```

## Notes

- `/print` route renders all pages in order without navigation UI.
- The PDF download button is enabled only after login.
