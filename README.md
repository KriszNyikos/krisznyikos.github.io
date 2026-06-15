# CV Generator

A data-driven, multi-route CV site built with Vue 3 — deployable as a static site with auto-generated PDFs.

## Features

- **Bilingual** — English and Hungarian versions are available at `/` and `/hu` respectively
- **JSON-driven** — all CV content lives in `cv.en.json` and `cv.hu.json`; no hardcoded text in templates
- **Auto PDF generation** — GitHub Actions runs Puppeteer on each push to `main`, producing `cv_nyikos_en.pdf` and `cv_nyikos_hu.pdf`
- **Static hosting** — deployed to GitHub Pages; no backend required

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Nuxt + TypeScript |
| Styling | Tailwind CSS + shadcn-vue |
| PDF generation | Puppeteer (headless Chrome) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## Project Structure

```
cv-generator/
├── .github/workflows/deploy.yml   # Build, PDF generation, and Pages deploy
├── src/
│   ├── components/                # CvHeader, CvExperience, CvSkills, etc.
│   ├── data/
│   │   ├── cv.en.json
│   │   └── cv.hu.json
│   ├── App.vue
│   └── main.ts
├── scripts/generate-pdf.js        # Puppeteer script (EN + HU)
└── public/                        # Generated PDFs land here
```

## How It Works

On every push to `main`:

1. `npm run generate` generates the static site
2. Puppeteer loads `/` → saves `cv_nyikos_en.pdf`
3. Puppeteer loads `/hu` → saves `cv_nyikos_hu.pdf`
4. PDFs are placed in `/public`
5. GitHub Pages deploys everything

## Local Development

```bash
npm install
npm run dev        # development server
npm run generate   # static build (outputs to .output/public)
```

To generate PDFs locally:

```bash
node scripts/generate-pdf.js
```