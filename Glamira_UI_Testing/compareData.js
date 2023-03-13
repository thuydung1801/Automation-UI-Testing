const fs = require('fs');
const csv = require('csv-parser');

const a = [];
const b = [];
const c = [];

const directoryPath = "./home"
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      files.forEach((file) => {

        fs.createReadStream(`${directoryPath}/${file}`)
    .pipe(csv())
    .on('data', (data) => {
        a.push(data)
    })
    .on('end', () => {
        const lastRow = a[a.length - 1];
        const nearLastRow = a[a.length - 2];
        // Create a new array and push the last row to it
        b.push(lastRow);
        c.push(nearLastRow);
        // console.log(b)
        // console.log(c)

        function compareData(data1, data2) {
            const metrics = [
              'performance-score',
              'first-contentful-paint',
              'interactive',
              'speed-index',
              'total-blocking-time',
              'largest-contentful-paint',
              'cumulative-layout-shift',
              'max-potential-fid',
              'first-meaningful-paint',
              'render-blocking-resources',
              'uses-responsive-images',
              'offscreen-images',
              'unminified-css',
              'unminified-javascript',
              'unused-css-rules',
            ];
          
            const averages1 = {};
            const averages2 = {};
          
            // Calculate the average value for each metric in data1
            metrics.forEach((metric) => {
              const values = data1.map((d) => parseFloat(d[metric]));
              const sum = values.reduce((a, b) => a + b, 0);
              const avg = sum / values.length;
              averages1[metric] = avg;
            });
          
            // Calculate the average value for each metric in data2
            metrics.forEach((metric) => {
              const values = data2.map((d) => parseFloat(d[metric]));
              
              const sum = values.reduce((a, b) => a + b, 0);
              const avg = sum / values.length;
              averages2[metric] = avg;
            });
          
            // Compare the average values of each metric between the two sets
            const differences = {};
            metrics.forEach((metric) => {
              const diff = averages2[metric] - averages1[metric];
              differences[metric] = diff;
            });
          
            // Display the differences between the two sets of data
            console.log(`--------------------------------------------------`);
            console.log(`Metric\t\t\t\t\t\tData1\t\tData2\t\tDifference`);
            console.log(`--------------------------------------------------`);
            metrics.forEach((metric) => {
              console.log(`${metric}\t\t\t\t${averages1[metric].toFixed(2)}\t\t${averages2[metric].toFixed(2)}\t\t${differences[metric].toFixed(2)}`);
            });
          
            return differences;
          }
          
        compareData(b, c);

    });
      });
});

// fs.createReadStream('./output.csv')
//     .pipe(csv())
//     .on('data', (data) => {
//         a.push(data)
//     })
//     .on('end', () => {
//         const lastRow = a[a.length - 1];
//         const nearLastRow = a[a.length - 2];
//         // Create a new array and push the last row to it
//         b.push(lastRow);
//         c.push(nearLastRow);
//         console.log(b)
//         console.log(c)

//         function compareData(data1, data2) {
//             const metrics = [
//               'performance-score',
//               'first-contentful-paint',
//               'interactive',
//               'speed-index',
//               'total-blocking-time',
//               'largest-contentful-paint',
//               'cumulative-layout-shift',
//               'max-potential-fid',
//               'first-meaningful-paint',
//               'render-blocking-resources',
//               'uses-responsive-images',
//               'offscreen-images',
//               'unminified-css',
//               'unminified-javascript',
//               'unused-css-rules',
//             ];
          
//             const averages1 = {};
//             const averages2 = {};
          
//             // Calculate the average value for each metric in data1
//             metrics.forEach((metric) => {
//               const values = data1.map((d) => parseFloat(d[metric]));
//               const sum = values.reduce((a, b) => a + b, 0);
//               const avg = sum / values.length;
//               averages1[metric] = avg;
//             });
          
//             // Calculate the average value for each metric in data2
//             metrics.forEach((metric) => {
//               const values = data2.map((d) => parseFloat(d[metric]));
              
//               const sum = values.reduce((a, b) => a + b, 0);
//               const avg = sum / values.length;
//               averages2[metric] = avg;
//             });
          
//             // Compare the average values of each metric between the two sets
//             const differences = {};
//             metrics.forEach((metric) => {
//               const diff = averages2[metric] - averages1[metric];
//               differences[metric] = diff;
//             });
          
//             // Display the differences between the two sets of data
//             console.log(`Metric\t\t\t\t\t\tData1\t\tData2\t\tDifference`);
//             console.log(`--------------------------------------------------`);
//             metrics.forEach((metric) => {
//               console.log(`${metric}\t\t\t\t${averages1[metric].toFixed(2)}\t\t${averages2[metric].toFixed(2)}\t\t${differences[metric].toFixed(2)}`);
//             });
          
//             return differences;
//           }
          
//         compareData(b, c);

//     });

