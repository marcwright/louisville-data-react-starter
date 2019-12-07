const csvToJson = require('convert-csv-to-json');

const fileInputName = 'inspections.csv';
const fileOutputName = 'inspections.json';

let json = csvToJson.getJsonFromCsv(fileInputName);

console.log(json)
// for (let i = 0; i < json.length; i++) {
//   console.log(json[i]);
// }

// const rawJson = csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
