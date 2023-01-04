const fs = require('fs');
const csv = require('csv-parser');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const { arrayToObjectsArray } = require('./arrayToObjectsArray');
const { cleanCSVObjectsArray } = require('./cleanCSVObjectsArray');

//

const data = [
  {
    Name: 'Decking',
    'Attribute 1 name': 'Profile',
    'Attribute 1 value(s)': [
      'Arris all round',
      'Arris two sides',
      'Grooved for clips',
    ],
    'Attribute 2 name': 'Dimensions',
    'Attribute 2 value(s)': ['65mm x 20mm', '100mm x 20mm', 'Custom size'],
  },
];

// CSV ORGNISER CODE BELOW
let csvObjectsArray = [];
let outputObjectsArray1 = [];
let outputObjectsArray2 = [];
let outputObjectsArray3 = [];
let outputObjectsArray4 = [];
let outputObjectsArray5 = [];
const productAttributes = [
  'Attribute 1 value(s)',
  'Attribute 2 value(s)',
  'Attribute 3 value(s)',
  'Attribute 4 value(s)',
  'Attribute 5 value(s)',
];

arrayToObjectsArray(data, outputObjectsArray1, productAttributes);
console.log(outputObjectsArray1);
console.log(`Total New Rows: ${outputObjectsArray1.length}`);

/*
// Create a CSV writer
const writer = csvWriter({
  path: 'file.csv', // specify the path to the CSV file
  header: [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'name' },
    { id: 'age', title: 'age' },
  ],
});

// Write the data to the CSV file
writer.writeRecords(data).then(() => {
  // console.log('The CSV file was written successfully');
});
*/
