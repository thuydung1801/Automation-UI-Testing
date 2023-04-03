//./lighthous-report-desktop/ae-1677642005680.csv
const fs = require("fs");
const csv = require("csv-parser");
const moment = require("moment");
const path = require('path');
var csvWriter = require('csv-write-stream')

const existingCsv = [];
// const stores = [
//   "int",
//   "ae",
//   "africa",
//   "africa-fr",
//   "africa-pt",
//   "at",
//   "az",
//   "az-en",
//   "be",
//   "be-fr",
//   "bg",
//   "bz",
//   "ca",
//   "ch",
//   "fr",
//   "ch-it",
//   "cl",
//   "cn",
//   "cr",
//   "id",
//   "id-en",
//   "nz",
//   "th",
//   "uk",
//   "za",
//   "ar",
//   "au",
//   "bh",
//   "bo",
//   "br",
//   "co",
//   "do",
//   "ec",
//   "gt",
//   "kw",
//   "mt",
//   "mx",
//   "my",
//   "my-my",
//   "pa",
//   "pe",
//   "ph",
//   "pr",
//   "py",
//   "sv",
//   "tr",
//   "tw",
//   "tw-en",
//   "uy",
//   "ve",
//   "glamira.com",
//   "es",
//   "cz",
//   "de",
//   "dk",
//   "ee",
//   "es",
//   "fi",
//   "fr",
//   "gf",
//   "gr",
//   "gy",
//   "hk",
//   "hk-cn",
//   "hk-en",
//   "hn",
//   "hr",
//   "hu",
//   "ie",
//   "in",
//   "is",
//   "it",
//   "jp",
//   "kr",
//   "lt",
//   "lv",
//   "md",
//   "nl",
//   "no",
//   "pl",
//   "pt",
//   "ro",
//   "se",
//   "sg",
//   "cn",
//   "si",
//   "sk",
//   "sr",
//   "vn",
//   "ring-paare",
// ]

const directoryPath = "./lighthous-report-desktop/homepage";

//stores.forEach((store) => {
async function populateFileData(file, res) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(file)
      .on("error", (err) => {
        console.error("Error reading CSV file:", err);
        reject(err);
      })
      .pipe(csv())
      .on("error", (err) => {
        console.error("Error parsing CSV data:", err);
        reject(err);
      })
      .on("data", (row) => {
        if (!res[row['name']]) {
          res[row['name']] = {
            score: 0,
            count: 0
          };
        }
        res[row['name']]['score'] = (res[row['name']]['score'] || 0) + (+row['score']);
        res[row['name']]['count'] = (res[row['name']]['count'] || 0) + 1;
      })
      .on("end", () => {
        resolve(res);
      });
  });
}
async function populateDirData(directoryPath, outputFilename, headers) {
  headers = headers || 'datetime,performance-score,first-contentful-paint,interactive,speed-index,total-blocking-time,largest-contentful-paint,cumulative-layout-shift,max-potential-fid,first-meaningful-paint,render-blocking-resources,uses-responsive-images,offscreen-images,unminified-css,unminified-javascript,unused-css-rules,unused-javascript,uses-optimized-images,modern-image-formats,uses-text-compression,uses-rel-preconnect,server-response-time,redirects,uses-rel-preload,uses-http2,efficient-animated-content,duplicated-javascript,legacy-javascript,preload-lcp-image,total-byte-weight,uses-long-cache-ttl,dom-size,critical-request-chains,user-timings,bootup-time,mainthread-work-breakdown,font-display,resource-summary,third-party-summary,third-party-facades,largest-contentful-paint-element,lcp-lazy-loaded,layout-shift-elements,uses-passive-event-listeners,no-document-write,long-tasks,non-composited-animations,unsized-images,viewport,no-unload-listeners,performance-budget,timing-budget,network-requests,network-rtt,network-server-latency,main-thread-tasks,diagnostics,metrics,screenshot-thumbnails,final-screenshot,script-treemap-data,accessibility-score,accesskeys,aria-allowed-attr,aria-command-name,aria-hidden-body,aria-hidden-focus,aria-input-field-name,aria-meter-name,aria-progressbar-name,aria-required-attr,aria-required-children,aria-required-parent,aria-roles,aria-toggle-field-name,aria-tooltip-name,aria-treeitem-name,aria-valid-attr-value,aria-valid-attr,button-name,bypass,color-contrast,definition-list,dlitem,document-title,duplicate-id-active,duplicate-id-aria,form-field-multiple-labels,frame-title,heading-order,html-has-lang,html-lang-valid,image-alt,input-image-alt,label,link-name,list,listitem,meta-refresh,meta-viewport,object-alt,tabindex,td-headers-attr,th-has-data-cells,valid-lang,video-caption,logical-tab-order,focusable-controls,interactive-element-affordance,managed-focus,focus-traps,custom-controls-labels,custom-controls-roles,visual-order-follows-dom,offscreen-content-hidden,use-landmarks,best-practices-score,is-on-https,geolocation-on-start,notification-on-start,no-vulnerable-libraries,csp-xss,password-inputs-can-be-pasted-into,image-aspect-ratio,image-size-responsive,preload-fonts,doctype,charset,js-libraries,deprecations,errors-in-console,valid-source-maps,inspector-issues,seo-score,viewport,document-title,meta-description,http-status-code,link-text,crawlable-anchors,is-crawlable,robots-txt,image-alt,hreflang,canonical,font-size,plugins,tap-targets,structured-data,pwa-score,installable-manifest,service-worker,splash-screen,themed-omnibox,content-width,viewport,apple-touch-icon,maskable-icon,pwa-cross-browser,pwa-page-transitions,pwa-each-page-has-url'.split(',')
  const files = fs.readdirSync(directoryPath);
  let res = {};
  for (let i = 0; i < files.length; i++) {
    res = await populateFileData(path.join(directoryPath, files[i]), res);
  }
  let row = [];
  headers.forEach((key) => {
    let value = 'N/A';
    if (key == 'datetime') {
      row.push(moment().format('MM/DD/YYYY HH:mm:ss'));
      return;
    }
    if (res[key]) {
      if (res[key]['count'] != 0) {
        value = res[key]['score'] / res[key]['count'];
        if (isNaN(value)) {
          console.log(res[key]['score'], res[key]['count'])
        }
      }
    } else {
      console.log('Name `' + key + '` no have data');
    }
    row.push(value);
  })


  let writerOptions = { headers: headers, sendHeaders: false };
  let fileOptions = {};
  let data = [row];
  if (fs.existsSync(outputFilename)) {
    fileOptions['flags'] = 'a';
  } else {
    delete writerOptions.sendHeaders;
  }
  let writer = csvWriter(writerOptions);
  writer.pipe(fs.createWriteStream(outputFilename, fileOptions))
  data.forEach((row) => {
    writer.write(row);
  });
  writer.end();
  return outputFilename;
}

// example moment().format('YYMMDD')
// populateDirData(path.join('lighthous-report-desktop', 'homepage'), path.join('lighthous-report-desktop-stats', 'output.csv'))
//   .then(() => {
//     console.log('done');
//   })
//   .catch(err => {
//     console.log('Error process:', err)
//   })

populateDirData(path.join('lighthous-report-desktop', 'productpage'), path.join('lighthous-report-desktop-stats', 'output-productpage.csv'))
  .then(() => {
    console.log('done');
  })
  .catch(err => {
    console.log('Error process:', err)
  })