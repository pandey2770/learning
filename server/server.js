var passport = require('passport');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var test = require('./src/test');
var cookieParser = require('cookie-parser')

var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: 'ssdn', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./src/auth.js');

app.get('/api/test', async (req, res) => {
const testList = await test.getAllTest();
  res.json(testList);
});
  

app.post('/api/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log('------------------------------------')
    res.json({test: 'test'});
  }
);

app.listen(3001, () => console.log("Server started on port 3001"));