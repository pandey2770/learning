
var passport = require('passport');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require("express-session");
var bodyParser = require("body-parser");
var user = require('./src/user');



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
  passport.authenticate('local'),
  function(req, res) {
    res.sendStatus(200);
  });

app.get('/api/logout', function(req, res){
  req.logout();
  res.sendStatus(200);
});

app.post('/api/signUp',  async (req, res) => {
  const data = await user.signup(req.body.username,req.body.password);
  res.json({ data });
});

app.put('/api/setting/:id', async (req, res) => {
  if (req.user) {
    const data = await user.changeSetting(req.user.id, req.body.user);
    res.json({ id: req.user.id }); 
  }
    else{
      res.status(401).send('Unauthorized!')
   }
})

app.get('/api/data', async(req,res) =>{
  const data = await user.getAllData();
  res.json(data)
})

app.listen(3001, () => console.log("Server started on port 3001"));
