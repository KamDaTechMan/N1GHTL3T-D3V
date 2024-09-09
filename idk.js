// This is the main file that will be used to run the entire application.
// It will load all of the other files and create the necessary objects.

// Load the necessary modules
const fs = require('fs');
const path = require('path');

// Define the directory where the files are located
const directory = path.join(__dirname, 'files');

// Create an array to store all of the files
const files = [];

// Read all of the files in the directory
fs.readdir(directory, (err, items) => {
  if (err) {
    console.error(err);
    return;
  }

  // Iterate over the files and add them to the array
  items.forEach(item => {
    // Only add files, not directories
    if (!fs.statSync(path.join(directory, item)).isDirectory()) {
      files.push(item);
    }
  });

  // Create an object to store all of the data
  const data = {};

  // Iterate over the files and load them
  files.forEach(file => {
    // Get the file name without the extension
    const name = path.basename(file, path.extname(file));

    // Read the file
    const content = fs.readFileSync(path.join(directory, file), 'utf8');

    // Add the data to the object
    data[name] = content;
  });

  // Do something with the data
  console.log(data);
});