const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../dist');
console.log(publicPath);

app.use('/dist', express.static(publicPath)); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes

const routes = require('./routes/routes.js')(app, fs);

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})