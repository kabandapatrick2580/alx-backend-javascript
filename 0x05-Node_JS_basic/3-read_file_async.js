const fs = require('fs');

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const studentCounts = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const major = fields[fields.length - 1].trim();

        if (fields.length === 1 && fields[0].trim() === '') {
          return;
        }

        studentCounts[major] = (studentCounts[major] || 0) + 1;
      });

      console.log(`Number of students: ${lines.length}`);

      Object.entries(studentCounts).forEach(([major, count]) => {
        const list = lines
          .filter((line) => line.trim().endsWith(major))
          .map((line) => line.split(',')[0].trim())
          .join(', ');
        console.log(`Number of students in ${major}: ${count}. List: ${list}`);
      });

      resolve(lines.length);
    });
  });
}

module.exports = countStudents;
