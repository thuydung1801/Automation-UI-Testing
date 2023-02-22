// import { chromium } from "playwright";(async () => {
//   try{
//     const browser = await chromium.launch()
//     const page = await browser.newPage()
//     await page.goto("https://www.checklyhq.com/")
    
//     const LCP = await page.evaluate (() =>{
//       return new Promise((resolve) => {
//         new PerformanceObserver((list)=>{
//           const entries = list.getEntries()
//           const LCP = entries.at(-1)
//           resolve(LCP.startTime)
//         }).observe({
//           type: 'largest-contentful-paint',
//           buffered: true
//         })
//       })
//     })
//     console.log(parseInt(LCP,10))
//   }
//   catch(error){
//     console.error(error)
//     process.exit(1)
//   }
// })()
export default {
  extends: 'lighthouse:default',
  settings: {
    onlyAudits: [
      'first-meaningful-paint',
      'speed-index',
      'interactive',
    ],
  },
};
import fs from 'fs';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
const runnerResult = await lighthouse('https://example.com', options);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
fs.writeFileSync('lhreport.html', reportHtml);

// `.lhr` is the Lighthouse Result as a JS object
console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

await chrome.kill();