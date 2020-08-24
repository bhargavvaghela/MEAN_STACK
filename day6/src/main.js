const http = require("http");
const mod = require("./my.module");

http
  .createServer((req, res) => {
   
   

    const myresponse = JSON.stringify(mod.list);

  
    res.end(myresponse);
  })
  .listen(5600);