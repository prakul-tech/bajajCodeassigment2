const express = require('express');
const { Client } = require('pg');
const path = require('path');
var bodyParser = require("body-parser");
var cors=require("cors");
const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/mydatebase';
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin:['http://localhost:4200']
}))
app.set('port', process.env.PORT || 5000);

// app.get('/', function (req, res, next) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/', function (req, res, next) {
client.query("SELECT * FROM emp", function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

app.listen(5000, function () {
    console.log('Server is running.. on Port 5000');
});