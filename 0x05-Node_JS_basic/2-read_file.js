const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8').split('\n');

    // Filter out empty lines and remove header
    const validData = data.filter(line => line.trim() !== '');
    validData.shift(); // Remove the header line

    // Calculate the total number of students
    const numberOfStudents = validData.length;

    // Log the total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Create an object to store the count of students in each field
    const fieldCounts = {};

    // Process each line and count the number of students in each field
    validData.forEach(line => {
      const [, , , field] = line.split(',').map(item => item.trim());
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      const firstName = line.split(',')[0].trim();
      fieldCounts[field].push(firstName);
    });

    // Log the number of students in each field and their first names
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
    }
  } catch (error) {
    // If an error occurs, log an error message
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
