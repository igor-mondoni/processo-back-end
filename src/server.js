const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.urlencoded());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin: *');
    res.header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT');
    res.header('Access-Control-Allow-Credentials', true);
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(routes);
app.listen(3333);