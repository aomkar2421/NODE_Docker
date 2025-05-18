const express = require('express')
const data = require('./data')
const cors = require('cors'); 

const app = express();
app.use(cors());

app.get('/api', (req, resp) => {
    resp.send(data);
    resp.end();
})

app.listen(4500, ()=>{
    console.log("Server started");
})