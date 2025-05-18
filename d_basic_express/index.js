const express = require('express');
const path = require('path');

const app = express();

// console.log(path.join(__dirname, "public"));

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.get('', (req, resp) =>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, resp) =>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/register', (req, resp) =>{
    resp.sendFile(`${publicPath}/register.html`)
})

app.get('/login', (req, resp) =>{
    resp.sendFile(`${publicPath}/login.html`)
})


app.listen(4500, () => {
    console.log("server started");
});