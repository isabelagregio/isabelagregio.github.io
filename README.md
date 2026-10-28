# Isabela Gregio — AI Engineering Portfolio

Responsive personal portfolio built with React and Vite, prepared for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Backup any existing content in `isabelagregio/isabelagregio.github.io` before replacing it.
2. Copy **all** project files (including `.github/workflows/deploy.yml`) into that repo.
3. Commit and push to `main`.
4. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
5. Inspect the **Actions** tab for the deploy status; then visit `https://isabelagregio.github.io`.

The `vite.config.js` has `base: '/'`, suitable for a user-site repository (`username.github.io`). If you deploy to a **project** repository instead, change `base` to `'/repository-name/'`.

## Content and attribution notes

- The content and links are embedded in `src/main.jsx` for easy editing.
- Results for the multi-agent experiments are preliminary and linked to the public repository.
- The arXiv paper reports *up to* 27 percentage-point fairness improvement; this is a paper-level result, not an average.
- The Recipe AI classification accuracy is reported in the public repository README.
- The botnet and multimodal projects are described as academic / work in progress and **do not claim public source code**.
- Aprix and BTG summaries are high-level, with no private links or confidential metrics.
- LinkedIn URL should be reviewed before publishing.

This repository has no backend, API keys, trackers, analytics cookies or paid infrastructure requirements.
