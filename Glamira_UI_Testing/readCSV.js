//./lighthous-report-desktop/ae-1677642005680.csv
const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');

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
const existingCsv = [];

fs.createReadStream('./lighthous-report-desktop/ae-1677642005680.csv')
  .on('error', (err) => {
    console.error('Error reading CSV file:', err);
  })
  .pipe(csv())
  .on('error', (err) => {
    console.error('Error parsing CSV data:', err);
  })
  .on('data', (row) => {
    existingCsv.push(row['score'])
  })
  .on('end', () => {
    existingCsv.unshift(moment().format('MM/DD/YYYY HH:mm:ss'));
    fs.appendFile('output.csv', `${existingCsv.join(',')}\n`, function (err) {
      if (err) {
        console.error('Error writing to output file:', err);
      } else {
        console.log('Saved!', existingCsv.length);
        console.log(existingCsv[160]);
      }
    });
  });



