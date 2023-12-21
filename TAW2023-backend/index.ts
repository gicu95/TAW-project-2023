/* INIT OF THE BACKEND SERVER */

//load all envs
require('dotenv').config();

//imports
import express = require('express');
import bodyParser = require('body-parser');
import jsonwebtoken = require('jsonwebtoken');
const { expressjwt: jwt } = require('express-jwt'); 
import cors = require('cors');

import v1_routes = require('./app/v1/routes/routes');


//start http server
const app = express();

var auth = jwt({secret: process.env.JWT_SECRET});


app.use(cors());
app.use(bodyParser.json());

app.use( (req, res, next) => {
    console.log(`New request for: [${req.method}] ${req.url}`);
    next();
});


//app.use('/api/v1', v1_routes);