const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const data = [
  {
    id: 1,
    name: 'John',
    age: 30,
  },
  {
    id: 2,
    name: 'Jane',
    age: 25,
  },
  // ... more objects
];

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
  console.log('The CSV file was written successfully');
});
