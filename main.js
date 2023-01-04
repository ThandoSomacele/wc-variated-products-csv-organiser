const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const { arrayToObjectsArray } = require('./arrayToObjectsArray');
const { cleanCSVObjectsArray } = require('./cleanCSVObjectsArray');
const { testData } = require('./testCode');

const app = express();

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

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => csvObjectsArray.push(data)) //TODO create writeStream
  .on('end', () => {
    csvObjectsArray = cleanCSVObjectsArray(csvObjectsArray, productAttributes);
    // console.log(csvObjectsArray);
    // console.log(`Total New Variations: ${csvObjectsArray.length}`);
    // arrayToObjectsArray(csvObjectsArray, outputObjectsArray1);
    // arrayToObjectsArray(outputObjectsArray1, outputObjectsArray2);
    // arrayToObjectsArray(outputObjectsArray2, outputObjectsArray3);
    // arrayToObjectsArray(outputObjectsArray3, outputObjectsArray4);
    // arrayToObjectsArray(outputObjectsArray4, outputObjectsArray5);
    // console.log(outputObjectsArray5);

    /*
    // Parse and create a csv file based on the output Array Objects
    const data = outputObjectsArray5;

    // Create a CSV writer
    const writer = csvWriter({
      path: 'file.csv', // specify the path to the CSV filegi
      header: [
        { id: 'ID', title: 'ID' },
        { id: 'Type', title: 'Type' },
        { id: 'SKU', title: 'SKU' },
        { id: 'Name', title: 'Name' },
        { id: 'Published', title: 'Published' },
        { id: 'Is featured?', title: 'Is featured?' },
        { id: 'Visibility in catalog', title: 'Visibility in catalog' },
        { id: 'Short description', title: 'Short description' },
        { id: 'Description', title: 'Description' },
        { id: 'Date sale price starts', title: 'Date sale price starts' },
        { id: 'Date sale price ends', title: 'Date sale price ends' },
        { id: 'Tax status', title: 'Tax status' },
        { id: 'Tax class', title: 'Tax class' },
        { id: 'In stock?', title: 'In stock?' },
        { id: 'Stock', title: 'Stock' },
        { id: 'Low stock amount', title: 'Low stock amount' },
        { id: 'Backorders allowed?', title: 'Backorders allowed?' },
        { id: 'Sold individually?', title: 'Sold individually?' },
        { id: 'Weight (kg)', title: 'Weight (kg)' },
        { id: 'Length (cm)', title: 'Length (cm)' },
        { id: 'Width (cm)', title: 'Width (cm)' },
        { id: 'Height (cm)', title: 'Height (cm)' },
        {
          id: 'Allow customer reviews?',
          title: 'Allow customer reviews?',
        },
        { id: 'Purchase note', title: 'Purchase note' },
        { id: 'Sale price', title: 'Sale price' },
        { id: 'Regular price', title: 'Regular price' },
        { id: 'Categories', title: 'Categories' },
        { id: 'Tags', title: 'Tags' },
        { id: 'Shipping class', title: 'Shipping class' },
        { id: 'Images', title: 'Images' },
        { id: 'Download limit', title: 'Download limit' },
        { id: 'Download expiry days', title: 'Download expiry days' },
        { id: 'Parent', title: 'Parent' },
        { id: 'Grouped products', title: 'Grouped products' },
        { id: 'Upsells', title: 'Upsells' },
        { id: 'Cross-sells', title: 'Cross-sells' },
        { id: 'External URL', title: 'External URL' },
        { id: 'Button text', title: 'Button text' },
        { id: 'Position', title: 'Position' },
        { id: 'Attribute 1 name', title: 'Attribute 1 name' },
        { id: 'Attribute 1 value(s)', title: 'Attribute 1 value(s)' },
        { id: 'Attribute 1 visible', title: 'Attribute 1 visible' },
        { id: 'Attribute 1 global', title: 'Attribute 1 global' },
        { id: 'Attribute 2 name', title: 'Attribute 2 name' },
        { id: 'Attribute 2 value(s)', title: 'Attribute 2 value(s)' },
        { id: 'Attribute 2 visible', title: 'Attribute 2 visible' },
        { id: 'Attribute 2 global', title: 'Attribute 2 global' },
        { id: 'Attribute 3 name', title: 'Attribute 3 name' },
        { id: 'Attribute 3 value(s)', title: 'Attribute 3 value(s)' },
        { id: 'Attribute 3 visible', title: 'Attribute 3 visible' },
        { id: 'Attribute 3 global', title: 'Attribute 3 global' },
        { id: 'Attribute 4 name', title: 'Attribute 4 name' },
        { id: 'Attribute 4 value(s)', title: 'Attribute 4 value(s)' },
        { id: 'Attribute 4 visible', title: 'Attribute 4 visible' },
        { id: 'Attribute 4 global', title: 'Attribute 4 global' },
        { id: 'Attribute 5 name', title: 'Attribute 5 name' },
        { id: 'Attribute 5 value(s)', title: 'Attribute 5 value(s)' },
        { id: 'Attribute 5 visible', title: 'Attribute 5 visible' },
        { id: 'Attribute 5 global', title: 'Attribute 5 global' },
      ],
    });

    // Write the data to the CSV file
    writer.writeRecords(data).then(() => {
      console.log('The CSV file was written successfully');
    });
    */
  });

// START SERVER
// app.use(express.json());

// app.listen(3000, () => console.log('Server started on port 3000...'));
