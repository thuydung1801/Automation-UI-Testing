// glamira ui testing
const { expect, test } = require('@playwright/test');
test("simple screenshot comparison test", async ({ page }) => {
  // navigating to url
  await page.goto('https://stage.glamira.co.uk/');
  await page.waitForTimeout(10000)

  // visually comparing two screenshots
  await expect(page).toHaveScreenshot({
    fullPage:true , timeout: 30000, maxDiffPixelRatio: 0.2
  });
});

test("test", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/diamond/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage:true, timeout: 50000 , maxDiffPixelRatio: 0.2
    }
  );
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
