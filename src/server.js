const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes

const routes = require('./routes/routes.js')(app, fs);

//Serve

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})