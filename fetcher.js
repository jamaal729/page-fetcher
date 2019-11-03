const request = require('request');
const fs = require('fs');

const fetch = function (url, filepath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    if (response.statusCode === 200) {
      fs.writeFile(filepath, body, (err) => {
        if (!err) {
          console.log(`Downloaded and saved ${body.length} bytes to ${filepath}.`);
        } else {
          throw err;
        }
      });
    }
  });
}

const args = (process.argv).slice(2);
console.log(args[0]);
console.log(args[1]);
fetch(args[0], args[1]);

// Test code: node fetcher.js http://www.example.com/ ./index.html
