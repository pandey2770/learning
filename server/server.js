var getCurrentUser = require('../client/src/action');

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
  const data = await user.signup(req.body.username,req.body.password);
    res.json({ data });
});

app.put('/api/setting/:id', async (req, res) => {
  console.log(req.body.user,req.user.id)
  const data = await user.changeSetting(req.user.id, req.body.user);
  if (getCurrentUser) {
    res.json({ id: req.user.id }); 
  }
    else{
      res.status(401).send('Unauthorized!')
   }
})

app.get('api/data', async(req,res) =>{
  const data = await user.data();
  res.json(data)
})

app.listen(3001, () => console.log("Server started on port 3001"));
