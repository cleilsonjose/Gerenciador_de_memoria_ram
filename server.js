const http = require("http");
const port = 3000;

http.createServer((req, res) => {
  res.end('<h1>Hello word</h1>')
}).listen(port,()=>console.log(`Server is running in http://localhost:${port}`));