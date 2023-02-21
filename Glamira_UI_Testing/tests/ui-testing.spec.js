// glamira ui testing
const { expect, test } = require('@playwright/test');
const urls = [
    "https://int.glamira.com/",
    "https://www.glamira.ae/",
    "https://www.glamira.africa/",
    "https://www.glamira.africa/fr/",
    "https://www.glamira.africa/pt/",
    "https://www.glamira.at/",
    "https://www.glamira.az/",
    "https://www.glamira.az/en/",
    "https://www.glamira.be/",
    "https://www.glamira.be/fr/",
    "https://www.glamira.bg/",
    "https://www.glamira.bz/",
    "https://www.glamira.ca/",
    "https://www.glamira.ch/",
    "https://www.glamira.ch/fr/",
    "https://www.glamira.ch/it/",
    "https://www.glamira.cl/",
    "https://www.glamira.cn/",
    "https://www.glamira.co.cr/",
    "https://www.glamira.co.id/",
    "https://www.glamira.co.id/en/",
    "https://www.glamira.co.nz/",
    "https://www.glamira.co.th/",
    "https://www.glamira.co.uk/",
    "https://www.glamira.co.za/",
    "https://www.glamira.com.ar/",
    "https://www.glamira.com.au/",
    "https://www.glamira.com.bh/",
    "https://www.glamira.com.bo/",
    "https://www.glamira.com.br/",
    "https://www.glamira.com.co/",
    "https://www.glamira.com.do/",
    "https://www.glamira.com.ec/",
    "https://www.glamira.com.gt/",
    "https://www.glamira.com.kw/",
    "https://www.glamira.com.mt/",
    "https://www.glamira.com.mx/",
    "https://www.glamira.com.my/",
    "https://www.glamira.com.my/my/",
    "https://www.glamira.com.pa/",
    "https://www.glamira.com.pe/",
    "https://www.glamira.com.ph/",
    "https://www.glamira.com.pr/",
    "https://www.glamira.com.py/",
    "https://www.glamira.com.sv/",
    "https://www.glamira.com.tr/",
    "https://www.glamira.com.tw/",
    "https://www.glamira.com.tw/en/",
    "https://www.glamira.com.ua/",
    "https://www.glamira.com.ua/ru/",
"https://www.glamira.com.uy/",
"https://www.glamira.com.ve/",
"https://www.glamira.com/",
"https://www.glamira.com/es/",
"https://www.glamira.cz/",
"https://www.glamira.de/",
"https://www.glamira.dk/",
"https://www.glamira.ee/",
"https://www.glamira.es/",
"https://www.glamira.fi/",
"https://www.glamira.fr/",
"https://www.glamira.gf/",
"https://www.glamira.gr/",
"https://www.glamira.gy/",
"https://www.glamira.hk/",
"https://www.glamira.hk/cn/",
"https://www.glamira.hk/en/",
"https://www.glamira.hn/",
"https://www.glamira.hr/",
"https://www.glamira.hu/",
"https://www.glamira.ie/",
"https://www.glamira.in/",
"https://www.glamira.is/",
"https://www.glamira.it/",
"https://www.glamira.jp/",
"https://www.glamira.kr/",
"https://www.glamira.lt/",
"https://www.glamira.lv/",
"https://www.glamira.md/",
"https://www.glamira.nl/",
"https://www.glamira.no/",
"https://www.glamira.pl/",
"https://www.glamira.pt/",
"https://www.glamira.ro/",
"https://www.glamira.rs/",
"https://www.glamira.ru/",
"https://www.glamira.se/",
"https://www.glamira.sg/",
"https://www.glamira.sg/cn/",
"https://www.glamira.si/",
"https://www.glamira.sk/",
"https://www.glamira.sr/",
"https://www.glamira.vn/",
"https://www.ring-paare.de/",
];

urls.forEach(url => {
  test("homepage: " + url, async ({ playwright }) => {
      const browser = await playwright.chromium.launch({
          args: ['--remote-debugging-port=9222'],
      })
      const context = await browser.newContext();
      const page = await context.newPage()
      await page.goto(url);
      await page.waitForTimeout(10000)
      await expect(page).toHaveScreenshot({
        fullPage:true , timeout: 30000, maxDiffPixelRatio: 0.2
      });
      await page.close();
      await context.close();
      await browser.close();
  })
});

urls.forEach(url => {
test("product page : " + url, async ({ playwright }) => {
  const browser = await playwright.chromium.launch({
    args: ['--remote-debugging-port=9222'],
  })
const context = await browser.newContext();
const page = await context.newPage()
  await page.goto(url+'catalog/product/view/id/98249');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  await page.close();
  await context.close();
  await browser.close();
})
});

urls.forEach(url => {
  test("rings home : " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
  const context = await browser.newContext();
  const page = await context.newPage()
    await page.goto(url+'catalog/category/view/id/27');
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage:true, timeout: 500000 , maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
  });

//catalog/category/view/id/27?stone1=ruby
//filter stone
urls.forEach(url => {
  test("filter stone : " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
  const context = await browser.newContext();
  const page = await context.newPage()
    await page.goto(url+'catalog/category/view/id/27?stone1=ruby');
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage:true, timeout: 500000 , maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
  });
test("carat", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/carat-0.10-0.25/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("baguette-cut", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/baguette-cut/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});


test("color stone", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/585-white-gold/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("metal", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/750-white-gold/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("price", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/750-white-gold/price-100-2000/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("landing wedding", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/engagement-and-wedding-rings/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("landing jewlery", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/jewelry/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("landing ring home", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/rings-home/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

test("login", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto("/");
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  await page.evaluate(()=> window.scrollTo(0,300))
  await page.waitForTimeout(5000)
  const language = page.locator(
    "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
  )
  if (await language.isVisible()) {
    await expect(language).toBeVisible()
    await language.click()
  }
  const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
  await cookies.click()
  await page.click("//a[@title='Log In/Sign Up']");
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  //login
  const email = page.locator("#login-email")
  await expect(email).toBeVisible()
  await email.fill("linh@onlinebizsoft.com")
  await page.locator("#login-password").fill("Linh@123")
  await page
    .locator(
      "//*[@id='customer_form_login_form_ajax']//button[@type='submit']"
    )
    .click()
  //add to cart
  await page.goto('glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant');
  //compare visual: product page
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  //compare visual: stickey page
  await page.evaluate(()=> window.scrollTo(0,300))
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  //shopping cart
  await page.locator("#product-addtocart-button").click()
  await page.waitForTimeout(1000)
  await page
    .locator(
      "a.action.showcart"
    )
    .click()
  await page
    .locator(
      "//a[@class='action primary large full-w viewcart']"
    )
    .click()
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
  //checkout page
  await page.waitForTimeout(5000)
  const checkout = page.locator(
    "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
  )
  await expect(checkout).toBeVisible()
  await checkout.click()
  await page.waitForTimeout(5000)
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
});

