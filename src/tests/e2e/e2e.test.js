const puppeteer = require('puppeteer');

test('It should check if card updates on filter', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    ards: ['--window-size=1920, 1080'],
  });
  const page = await browser.newPage();
  await page.goto(
    'localhost:3000',
  );

  // Test for Per - short due to time constaints

  await page.select('.filter', '4246');
  const imgURLPer = await page.$eval('.card__profile-img', (el) => el.src);
  expect(imgURLPer).toBe('http://localhost:3000/img/p4246.png');
  const titlePer = await page.$eval('.card__title', (el) => el.innerText);
  expect(titlePer).toBe('Per Mertesacker');
  const subtitlePer = await page.$eval('.card__subtitle', (el) => el.innerText);
  expect(subtitlePer).toBe('Defender');

  // Test for Yaya

  await page.select('.filter', '4148');
  const imgURLYaya = await page.$eval('.card__profile-img', (el) => el.src);
  expect(imgURLYaya).toBe('http://localhost:3000/img/p4148.png');
  const titleYaya = await page.$eval('.card__title', (el) => el.innerText);
  expect(titleYaya).toBe('Yaya Touré');
  const subtitleYaya = await page.$eval('.card__subtitle', (el) => el.innerText);
  expect(subtitleYaya).toBe('Midfielder');

  // Test for Wayne

  await page.select('.filter', '2064');
  const imgURLWayne = await page.$eval('.card__profile-img', (el) => el.src);
  expect(imgURLWayne).toBe('http://localhost:3000/img/p2064.png');
  const titleWayne = await page.$eval('.card__title', (el) => el.innerText);
  expect(titleWayne).toBe('Wayne Rooney');
  const subtitleWayne = await page.$eval('.card__subtitle', (el) => el.innerText);
  expect(subtitleWayne).toBe('Fullback');

  await browser.close();
});
