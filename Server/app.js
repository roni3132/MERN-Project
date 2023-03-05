const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
require('./DB/DB');
app.use(express.json())
const router = require('./api/api');
app.use(router);
const port = process.env.PORT;
const User = require("./Modal/userschema");

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Mern app listening on port ${port}`)
})