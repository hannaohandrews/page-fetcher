const request = require('request');
const fs = require('fs');

let myArgs = process.argv.slice(2);
request(myArgs[0], function(error, response, body) {

  fs.writeFile(myArgs[1], body,(err) => {
    const size = body.length;
    if (err) throw err;
    console.log(`Downloaded and saved ${size} bytes to ${myArgs[1]}`);
  });
});

// const size = fs.statSync(myArgs[1]).size
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
