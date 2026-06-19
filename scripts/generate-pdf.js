import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 1080 })
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }])
    await page.emulateMediaType('print')

    const host = process.env.PDF_HOST ?? 'http://localhost:3000'
    const routes = process.env.PDF_ROUTES ? process.env.PDF_ROUTES.split(',') : ['/', '/hu']
    const outputDir = process.env.PDF_OUTPUT_DIR ?? 'public'
    const filenamePrefix = process.env.PDF_FILENAME_PREFIX ?? 'cv_krisztian_nyikos'
    const year = new Date().toISOString().slice(0, 4)
    for (const route of routes) {
      await page.goto(`${host}${route}`, { waitUntil: 'networkidle2', timeout: 60000 })
      await page.waitForSelector('#__nuxt', { timeout: 10000 })
      const name = route === '/' ? `${filenamePrefix}_en_${year}.pdf` : `${filenamePrefix}_hu_${year}.pdf`
      await page.pdf({
        path: `${outputDir}/${name}`,
        format: 'A4',
        printBackground: true,
        scale: 0.85,
        margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
        preferCSSPageSize: true
      })
      console.log('Saved', name)
    }
  } catch (err) {
    console.error('PDF generation failed:', err)
    process.exitCode = 1
  } finally {
    await browser.close()
  }
})()
