const website = process.argv[2];
const filePath = process.argv[3];
const request = require('request');
const fs = require('fs');

const fetcher = function(website, filePath) {
  request(website, (error, response, body) => {
    writeToPath(body);
  }
)}

//write body to file
const writeToPath = function(body) {
  fs.writeFile(filePath, body, err => {
    if (err){
      console.log("An error occured, please try again")
    }
    else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
    }
  })
};

fetcher(website, filePath);