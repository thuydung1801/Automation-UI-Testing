//./lighthous-report-desktop/ae-1677642005680.csv
const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');

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

const directoryPath = './home';

//stores.forEach((store) => {
  
fs.readdir(directoryPath, (err, files) => {
  //./lighthous-report-desktop/africa-1677642132619.csv
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  files.forEach((file) => {
    const outputFilename = `homepage-${file}`;
    //if(file.includes(store)){
    fs.createReadStream(`${directoryPath}/${file}`)
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
        fs.appendFile(outputFilename, `${existingCsv.join(',')}\n`, function (err) {
          if (err) {
            console.error('Error writing to output file:', err);
          } else {
            console.log('Saved!');

          }
        });
      });
    //}
  });
});
//});