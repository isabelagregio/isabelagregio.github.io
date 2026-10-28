# Isabela Gregio — Portfolio

A responsive, desktop-inspired portfolio for AI engineering, software development, and research. Built with React, Vite, and plain CSS; deployed as a static site on GitHub Pages.

## Run locally

Requires Node.js 22 (Node 20+ is also supported by the dependencies).

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build output is in `dist/`.

## GitHub Pages

1. Use the repository `isabelagregio/isabelagregio.github.io` (root user-site URL).
2. Commit all source files, including `.github/workflows/deploy.yml` and `.gitignore`.
3. In GitHub **Settings → Pages**, set Source to **GitHub Actions**.
4. Push to `main`. GitHub Actions installs dependencies with `npm install`, builds the site, and publishes `dist/`.

## Editing content

Content and external links are in `src/main.jsx`; visual styling is in `src/styles.css`. The project is intentionally small and does not use a component library.

### Important review notes

- BTG internal platform screenshots and source code are intentionally not linked. Only share approved, non-confidential material.
- The separate BTG Backend Developer role currently has limited detail. Add accurate dates and a concrete contribution before publication if possible.
- The Qwen3-VL Kaggle project and botnet project have no verified public repository URLs. Replace the placeholders when code is released.
- GERAD results are preliminary; the final risk-aware router is still being validated.
- Ensure the stated professional impact metrics (10+ projects / 70+ people) are approved for public sharing.

## Attribution

Portfolio content based on personal project descriptions, public GitHub READMEs, and the arXiv preprint [Improving Fairness in LLMs Through Testing-Time Adversaries](https://arxiv.org/abs/2505.12100).

For reproducible builds, run `npm install` locally and commit the generated `package-lock.json`; then switch the deployment install step to `npm ci` and add `cache: npm` to `setup-node` if desired.
