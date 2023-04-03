// glamira ui testing
const { expect, test } = require('@playwright/test');
const urls = [
  //"https://int.glamira.com/",
  //"https://www.glamira.ae/",
  //"https://www.glamira.africa/",
  //"https://www.glamira.africa/fr/",
  //"https://www.glamira.africa/pt/",
  //"https://www.glamira.at/",
  //"https://www.glamira.az/",
  //"https://www.glamira.az/en/",
  //"https://www.glamira.be/",
  //"https://www.glamira.be/fr/",
  //"https://www.glamira.bg/",
  //"https://www.glamira.bz/",
  //"https://www.glamira.ca/",
  // "https://www.glamira.ch/",
  //  "https://www.glamira.ch/fr/",
  //"https://www.glamira.ch/it/",
  //"https://www.glamira.cl/",
  //"https://www.glamira.cn/",
  //"https://www.glamira.co.cr/",
  //"https://www.glamira.co.id/",
  //"https://www.glamira.co.id/en/",
  //"https://www.glamira.co.nz/",
  //"https://www.glamira.co.th/",
  //"https://www.glamira.co.uk/",
  //"https://www.glamira.co.za/",
  //"https://www.glamira.com.ar/",
  //"https://www.glamira.com.au/",
  //"https://www.glamira.com.bh/",
  //"https://www.glamira.com.bo/",
  //"https://www.glamira.com.br/",
  //"https://www.glamira.com.co/",
  //"https://www.glamira.com.do/",
  //"https://www.glamira.com.ec/",
  //"https://www.glamira.com.gt/",
  //"https://www.glamira.com.kw/",
  //"https://www.glamira.com.mt/",
  //"https://www.glamira.com.mx/",
  //"https://www.glamira.com.my/",
  //"https://www.glamira.com.my/my/",
  //"https://www.glamira.com.pa/",
  //"https://www.glamira.com.pe/",
  //"https://www.glamira.com.ph/",
  // "https://www.glamira.com.pr/",
  //"https://www.glamira.com.py/",
  //"https://www.glamira.com.sv/",
  //"https://www.glamira.com.tr/",
  //"https://www.glamira.com.tw/",
  //"https://www.glamira.com.tw/en/",
  //"https://www.glamira.com.uy/",
  //"https://www.glamira.com.ve/",
  //"https://www.glamira.com/",
  //"https://www.glamira.com/es/",
  //"https://www.glamira.cz/",
  //"https://www.glamira.de/",
  //"https://www.glamira.dk/",
  //"https://www.glamira.ee/",
  //"https://www.glamira.es/",
  //"https://www.glamira.fi/",
  //"https://www.glamira.fr/",
  //"https://www.glamira.gf/",
  //"https://www.glamira.gr/",
  //"https://www.glamira.gy/",
  //"https://www.glamira.hk/",
  //"https://www.glamira.hk/cn/",
  //"https://www.glamira.hk/en/",
  //"https://www.glamira.hn/",
  //"https://www.glamira.hr/",
  //"https://www.glamira.hu/",
  //"https://www.glamira.ie/",
  //"https://www.glamira.in/",
  //"https://www.glamira.is/",
  //"https://www.glamira.it/",
  //"https://www.glamira.jp/",
  //"https://www.glamira.kr/",
  //"https://www.glamira.lt/",
  //"https://www.glamira.lv/",
  //"https://www.glamira.md/",
  //"https://www.glamira.nl/",
  //"https://www.glamira.no/",
  //"https://www.glamira.pl/",
  //"https://www.glamira.pt/",
  //"https://www.glamira.ro/",
  //"https://www.glamira.se/",
  //"https://www.glamira.sg/",
  //"https://www.glamira.sg/cn/",
  //"https://www.glamira.si/",
  //"https://www.glamira.sk/",
  //"https://www.glamira.sr/",
  //"https://www.glamira.vn/",
  // "https://www.ring-paare.de/",
  "https://stage.glamira.co.uk/",
  //"https://dev3.glamira.com/glgb/"
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
      fullPage: true, timeout: 30000, maxDiffPixelRatio: 0.2
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
    const page = await context.newPage(

    );

    await page.goto(url + 'catalog/product/view/id/98249');
    await page.waitForTimeout(10000);

    const elementToRemove = await page.$('#product-collection');
    await page.evaluate(element => element.remove(), elementToRemove);

    await page.waitForTimeout(5000);
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2,
        //hideElements: ['div#product-collection']
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
    await page.goto(url + 'catalog/category/view/id/27');
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
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
    await page.goto(url + 'catalog/category/view/id/27?stone1=ruby');
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
});

urls.forEach(url => {
  test("filter carat : " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url + 'catalog/category/view/id/27?carat=0.001-0.099');
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
});

urls.forEach(url => {
  test("listing stone: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url + 'catalog/category/view/id/27');
    await page.waitForTimeout(5000)
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(5000)
    //await page.click("(//div[@class='item label filter-stone1']/dl/dt/span)[1]")
    await page.click("(//div[@class='item label filter-stone1']/dl/dd/li/dl/dt/span)[1]")
    await page.click("(//div[@class='item label filter-stone1']/dl/dd/li/dl/dd//li/a)[1]")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

urls.forEach(url => {
  test("listing stone shape: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url + 'catalog/category/view/id/27?stone1=ruby');
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.click("xpath=(//div[contains(@class,'item label filter-shape_diamonds')]/dl/dt/span/a)[1]")
    const stone_shape = "(//div[contains(@class,'item label filter-shape_diamonds')]//dd/ol/li/a/label)[1]"
    await page.waitForSelector(stone_shape)
    await page.click(stone_shape)
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
});

urls.forEach(url => {
  test("listing color + metal: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url + 'catalog/category/view/id/27?stone1=ruby');
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.click("xpath=(//div[contains(@class,'item label filter-colour')]/dl/dt/span/a)[1]")
    const stone_shape = "(//div[contains(@class,'item label filter-colour')]//dd/ol/li/a/label)[1]"
    await page.waitForSelector(stone_shape)
    await page.click(stone_shape)
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
});

urls.forEach(url => {
  test("product initals ring page: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    await page.waitForTimeout(5000)
    await page.goto(url + 'glamira-initials-ring-a.html?alloy=white-silber&stone1=diamond-Brillant');
    await page.waitForTimeout(2000);

    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.click("xpath=(//div[@id='product-options-wrapper']/div/div//div/span[@class='option_label_title'])[1]")
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 500000, maxDiffPixelRatio: 0.2
      }
    );
    await page.close();
    await context.close();
    await browser.close();
  })
});


test("price", async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('/diamond-rings/750-white-gold/price-100-2000/');
  await page.waitForTimeout(10000)
  // visually comparing two screenshots
  await expect(page).toHaveScreenshot(
    {
      fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
    }
  );
});

//landing rings home
urls.forEach(url => {
  test("landing rings home: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    await page.hover("xpath=//a[contains(@class,'main menu_node_33366__link')]");
    await page.waitForSelector("//a[@id='ui-id-3']")
    await page.click("//a[@id='ui-id-3']")
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

//landing wedding
urls.forEach(url => {
  test("landing wedding: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    await page.click("xpath=//a[contains(@class,'main menu_node_33438__link')]");
    await page.waitForTimeout(10000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});


//checkout
urls.forEach(url => {
  test("checkout " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(
      url + "glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant"
    )
    await page.evaluate(() => window.scrollTo(0, 900))
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
    await page.waitForTimeout(5000)

    await page.evaluate(() => window.scrollTo(0, 300))
    await page.locator("#product-addtocart-button").click()
    await page.waitForTimeout(1000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page
      .locator(
        "a.action.showcart"
      )
      .click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page
      .locator(
        "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
      )
      .click()
    await page.waitForTimeout(10000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    const checkout = page.locator(
      "#maincontent > div.columns > div > div.cart-container > div > ul > li > button"
    )
    await expect(checkout).toBeVisible()
    await checkout.click()

    await page.waitForTimeout(10000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    const username = page.locator("#checkout-login-email")
    await expect(username).toBeVisible()
    await username.fill("linh+1@onlinebizsoft.com")
    await page.locator("#checkout-login-password").fill("Linh@123")
    await page
      .locator(
        "#form-login > fieldset > div.actions-toolbar > div.primary > button"
      )
      .click()

    await page.waitForTimeout(15000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    const shipment = page.locator(
      "#login-address > div.checkout-step-form.login-address-form > div.step-content > div > form > div > div > button"
    )
    await expect(shipment).toBeVisible()
    await shipment.click()
    await page.waitForTimeout(10000)
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page
      .locator(
        "#html-body > div.page-wrapper > div.header-wrapper.header-container-checkout > header > div > div > a > span.cart-label"
      )
      .click()
    await page.waitForTimeout(1000)

    await page
      .locator(
        'a.action.action-delete'
      )
      .click()
    await page
      .locator(
        '#html-body > div.modals-wrapper > aside.modal-custom.delete-product.cart-remove-product.modal-sm.modal-confirm.modal--slide-up-m.modal--anchor-down-m.modal-slide._inner-scroll._show > div.modal-inner-wrap > footer > button.action.primary.delete-cart'
      )
      .click()
  });
});


// verify UI product page single earing
urls.forEach(url => {
  test("product page single earing: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(10000)
    await page.goto(url + "glamira-men-earring-kmetov.html")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

urls.forEach(url => {
  test("product page bridal set: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(10000)
    await page.goto(url + "glamira-bridal-set-gemmiferous.html")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

urls.forEach(url => {
  test("product page apple case: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(10000)
    await page.goto(url + "glamira-apple-watch-case-psara.html")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

//image product
urls.forEach(url => {
  test("product page image pendant: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(10000)
    await page.goto(url + "glamira-pendant-tate.html?accent=black&alloy=white-375&stone1=diamond-Brillant")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

//return form
urls.forEach(url => {
  test("return form: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(10000)
    await page.goto(url + "return/")
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        fullPage: true, timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

//login
urls.forEach(url => {
  test("login forgot and create account: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(url);
    //accept all cookies and geoip
    await page.evaluate(() => window.scrollTo(0, 900))
    await page.waitForTimeout(5000)
    const language = page.locator(
      "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
    )
    if (await language.isVisible()) {
      await expect(language).toBeVisible()
      await language.click()
    }
    const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
    if (await cookies.isVisible()) {
      await cookies.click()
    }
    await page.waitForTimeout(5000)
    await page.locator("(//li[@class='authorization-link login'])[1]/a").click();
    await page.waitForTimeout(5000)
    // visually comparing two screenshots
    await expect(page).toHaveScreenshot(
      {
        timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );


    await page.locator("#customer_form_login_form_ajax > form > div.fieldset.text-right > a").click();
    await expect(page).toHaveScreenshot(
      {
        timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );


    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.locator("(//li[@class='authorization-link login'])[1]/a").click();
    await page.locator(
      "#customer_form_login_form_ajax > div.footer-additional-information > div > a"
    ).click();
    await expect(page).toHaveScreenshot(
      {
        timeout: 50000, maxDiffPixelRatio: 0.2
      }

    );
    await page.close();
    await context.close();
    await browser.close();
  });
});

