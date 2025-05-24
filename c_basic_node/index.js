const http = require('http')
const data = require('./data');
const { json } = require('stream/consumers');

http.createServer( (req, resp) => {
resp.writeHead(200, {"Content-Type": "application/json"});
    resp.write(JSON.stringify(data));
    resp.end();
} ).listen( 4500, () => {
    console.log("server started");
})