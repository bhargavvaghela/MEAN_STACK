let fs = require("fs");

let Promise = require("bluebird");
// helping us to get new metohd; from callback method => promise based method;
Promise.promisifyAll(fs);

const filePath = "/Users/research/Desktop/temp.txt";
fs.readFileAsync(filePath, { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
