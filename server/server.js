var passport = require('passport');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require("express-session");
var bodyParser = require("body-parser");
var test = require('./src/test');

var app = express();

app.use(express.static("public"));
app.use(session({
  secret: 'ssdn',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.raw());

require('./src/auth.js');

app.get('/api/test', async (req, res) => {
const testList = await test.getAllTest();
console.log(testList)
  res.json(testList);
});

app.get('/api/currentuser', (req, res) => {
  console.log(req.user)
  res.json(req.user);
});
  
app.post('/api/login',
  passport.authenticate(
    'local',
    { successRedirect: '/', failureRedirect: '/login' }
  )
);

app.listen(3001, () => console.log("Server started on port 3001"));
