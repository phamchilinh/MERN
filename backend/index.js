const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./connectMongodb');
dotenv.config();

const port = process.env.PORT;
const pathDB = process.env.DB;

dbConnect(pathDB);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Web running in port: ${port}`);
});