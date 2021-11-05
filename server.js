const http = require("http");
const port = 3000;
const stats = require('./pcRamUsage')

http.createServer((req, res) => {
  let url = req.url;
  if(url === '/'){
    res.end(JSON.stringify(stats, null, 2));
  }
}).listen(port, ()=>console.log(`Server is running in http://localhost:${port}`));