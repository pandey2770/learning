var passport = require('passport');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require("express-session");
var bodyParser = require("body-parser");
var signup = require('./src/user');
var changeSetting = require('./src/user');

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

  
app.get('/api/currentuser', (req, res) => {
  res.json(req.user);
});
  
app.post('/api/login',
  passport.authenticate(
    'local',
    { successRedirect: '/', failureRedirect: '/login' }
  )
);
app.get('/api/logout', function(req, res){
  req.logout();
  res.sendStatus(200);
});

app.post('/api/signUp',  async (req, res) => {
  const data = await signup.signup(req.body.username,req.body.password);
  res.json({ data });
});

app.put('/api/setting/:id', async (req, res) => {
  console.log(req.body)
  const rowCount = await changeSetting.changeSetting(req.params.id, req.body.user);
  res.json({ id: req.params.id }); 
})


app.listen(3001, () => console.log("Server started on port 3001"));
