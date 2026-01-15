const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

admin.initializeApp();

const DEFAULT_ALLOWED_EMAILS = '8000gam@gmail.com';

const getAllowedEmails = () => {
  const raw = process.env.PDF_ALLOWED_EMAILS || DEFAULT_ALLOWED_EMAILS;
  return raw.split(',').map((email) => email.trim()).filter(Boolean);
};

exports.generatePdf = onRequest(
  {
    region: 'asia-northeast3',
    memory: '2GiB',
    timeoutSeconds: 120,
    invoker: 'public'
  },
  async (req, res) => {
    if (req.method !== 'GET') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/^Bearer (.+)$/);

    if (!match) {
      res.status(401).json({ error: 'Missing auth token.' });
      return;
    }

    let decodedToken;

    try {
      decodedToken = await admin.auth().verifyIdToken(match[1]);
    } catch (error) {
      console.error('Auth verification failed:', error);
      res.status(401).json({ error: 'Invalid auth token.' });
      return;
    }

    const allowedEmails = getAllowedEmails();

    if (!decodedToken.email || !allowedEmails.includes(decodedToken.email)) {
      res.status(403).json({ error: 'Not authorized.' });
      return;
    }

    const baseUrl =
      process.env.PRINT_BASE_URL || `https://${process.env.GCLOUD_PROJECT}.web.app`;
    const printUrl = `${baseUrl}/print?pdf=1`;

    let browser;

    try {
      browser = await puppeteer.launch({
        args: [...chromium.args, '--font-render-hinting=medium'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless
      });

      const page = await browser.newPage();
      await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.evaluateHandle('document.fonts.ready');
      await page.emulateMediaType('print');

      const pdfBuffer = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        preferCSSPageSize: true
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="portfolio.pdf"');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      res.status(200).send(pdfBuffer);
    } catch (error) {
      console.error('PDF generation failed:', error);
      res.status(500).json({ error: 'PDF generation failed.' });
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
);
