const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8')

    const validData = data.filter(line => libe.trim() != "");
    const numberOfStudents = validData.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    validDate.forEach(line => {
      const field = line.split(',')[3].trim();
      if (!fields[field]) {
	fields[field] = [];
      }
      const name = line.split(',')[0].trim();
      fields[field].push(name);
    });
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
      console.error("Cannot load the database");
  }
}

module.exports = countStudents;
