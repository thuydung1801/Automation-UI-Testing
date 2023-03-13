import { test } from "@playwright/test";
import { playAudit } from "playwright-lighthouse";


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
    "https://www.glamira.se/",
    "https://www.glamira.sg/",
    "https://www.glamira.sg/cn/",
    "https://www.glamira.si/",
    "https://www.glamira.sk/",
    "https://www.glamira.sr/",
    "https://www.glamira.vn/",
    "https://www.ring-paare.de/",
];

const stores = [
    "int",
    "ae",
    "africa",
    "africa-fr",
    "africa-pt",
    "at",
    "az",
    "az-en",
    "be",
    "be-fr",
    "bg",
    "bz",
    "ca",
    "ch",
    "fr",
    "ch-it",
    "cl",
    "cn",
    "cr",
    "id",
    "id-en",
    "nz",
    "th",
    "uk",
    "za",
    "ar",
    "au",
    "bh",
    "bo",
    "br",
    "co",
    "do",
    "ec",
    "gt",
    "kw",
    "mt",
    "mx",
    "my",
    "my-my",
    "pa",
    "pe",
    "ph",
    "pr",
    "py",
    "sv",
    "tr",
    "tw",
    "tw-en",
    "uy",
    "ve",
    "glamira.com",
    "es",
    "cz",
    "de",
    "dk",
    "ee",
    "es",
    "fi",
    "fr",
    "gf",
    "gr",
    "gy",
    "hk",
    "hk-cn",
    "hk-en",
    "hn",
    "hr",
    "hu",
    "ie",
    "in",
    "is",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "md",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "se",
    "sg",
    "cn",
    "si",
    "sk",
    "sr",
    "vn",
    "ring-paare",
]


//test.use({headless: true});
//home pgae
urls.forEach((url, index) => {

    test('homepage: ' + url, async ({ playwright }) => {

        const browser = await playwright.chromium.launch({
            args: ['--remote-debugging-port=9222'],
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
        for (let i = 0; i <= index; i++) {
            var file = `${stores[i]}`;
        }
        console.log(file)
        await playAudit({
            thresholds: {
                performance: 50,
                accessibility: 50,
                'best-practices': 50,
                seo: 50,
                pwa: 50,
            },
            ignoreError: true,
            page: page,
            port: 9222,
            reports:
            {
                "formats": {
                    html: false,
                    csv: true,
                    json: false
                },
                name: "" + file,
                directory: "lighthous-report-desktop/homepage"
            },
        });



        await page.close();
        await context.close();
        await browser.close();
    })

});

//listing page
urls.forEach((url, index) => {

    test('listing page: ' + url, async ({ playwright }) => {

        const browser = await playwright.chromium.launch({
            args: ['--remote-debugging-port=9222'],
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
        await page.hover("xpath=//a[contains(@class,'main menu_node_33366__link')]");
        await page.waitForSelector("//a[@id='ui-id-3']")
        await page.click("//a[@id='ui-id-3']")
        await page.waitForTimeout(10000)
        for (let i = 0; i <= index; i++) {
            var file = `${stores[i]}`;
        }
        console.log(file)
        await playAudit({
            thresholds: {
                performance: 50,
                accessibility: 50,
                'best-practices': 50,
                seo: 50,
                pwa: 50,
            },
            ignoreError: true,
            page: page,
            port: 9222,
            reports:
            {
                "formats": {
                    html: false,
                    csv: true,
                    json: false
                },
                name: "" + file,
                directory: "lighthous-report-desktop/listingpage"
            },
        });



        await page.close();
        await context.close();
        await browser.close();
    })

});