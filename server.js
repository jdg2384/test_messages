const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

// Express static public
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const test = require('./routes/test');
app.use(express.static('public'));
app.use('/test',test);

const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app;