// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n').map(line => line.split(','));
        const fields = {};
        lines.forEach(([firstName, field]) => {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        });
        resolve(fields);
      }
    });
  });
}
