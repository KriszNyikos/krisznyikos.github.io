# CV Generator

A data-driven, bilingual CV site built with Nuxt + TypeScript — deployable as a static site with auto-generated PDFs.

## Features

- **Bilingual**: English and Hungarian versions are available at `/` and `/hu`.
- **JSON-driven**: all CV content lives in [app/data/en.json](app/data/en.json) and [app/data/hu.json](app/data/hu.json); templates are data-driven.
- **Auto PDF generation**: a Puppeteer script produces PDFs for both languages.
- **Static hosting**: can be deployed to GitHub Pages; no backend required.

## Tech Stack

- **Framework**: Nuxt + TypeScript
- **Styling**: Tailwind CSS + shadcn-vue
- **PDF generation**: Puppeteer (headless Chrome)
- **CI/CD**: GitHub Actions (optional for PDF generation and Pages deploy)

## Project Structure

```
.
├── .github/                     # CI workflows (optional)
├── app/                         # Nuxt application (components, pages, data)
│   ├── components/              # CvHeader, CvExperience, CvSkills, etc.
│   ├── data/                    # JSON data files
│   │   ├── en.json
│   │   └── hu.json
│   └── pages/                   # `/` and `/hu` routes
├── public/                      # Generated PDFs and static assets
├── scripts/
│   └── generate-pdf.js          # Puppeteer script (EN + HU)
└── README.md
```

## How It Works

Typical flow when building and publishing PDFs:

1. Run the static build (`pnpm run generate`) to produce the site output (Nuxt writes to `.output/public`).
2. The Puppeteer script loads the English route (`/`) and saves `cv_nyikos_en.pdf`.
3. The Puppeteer script loads the Hungarian route (`/hu`) and saves `cv_nyikos_hu.pdf`.
4. PDFs are copied/placed into `public/` so they are published with the site (or the CI workflow uploads them to the Pages branch).

## Local Development

Install and run the dev server using `pnpm` (this repository uses pnpm):

```bash
pnpm install
pnpm dev        # development server
pnpm run generate   # static build (outputs to .output/public)
```

To generate PDFs locally (requires Node and a Chromium environment):

```bash
node scripts/generate-pdf.js
```

## Notes

- The data files are located under [app/data](app/data) — edit those to change CV content without touching templates.
- The Puppeteer script is at [scripts/generate-pdf.js](scripts/generate-pdf.js).

If you'd like, I can also update the GitHub Actions workflow or switch the README to show `npm` commands instead of `pnpm` — tell me which you prefer.