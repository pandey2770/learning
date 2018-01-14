var passport = require('passport');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require("express-session");
var bodyParser = require("body-parser");
var User = require('./src/user');
var Product = require('./src/product');

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

app.post('/api/signUp',  async (req, res) => {
  const data = await User.signUp(req.body.username,req.body.password);
  passport.authenticate('local')(req, res, function () {
    res.sendStatus(200);
  });
});

app.post('/api/login',
  passport.authenticate('local'),
  function(req, res) {
    res.sendStatus(200);
  }
);

app.get('/api/user', (req, res) => {
  res.json(req.user);
});

app.get('/api/logout', function(req, res){
  req.logout();
  res.sendStatus(200);
});

app.put('/api/user/:id', async (req, res) => {
  if (req.user) {
    const data = await User.updateData(req.params.id, req.body.user);
    res.sendStatus(200);
  } else {
      res.status(401).send('Unauthorized!')
   }
});

app.get('/api/product', async(req,res) =>{
  const data = await Product.getAll();
  res.json(data)
});

app.get('/api/product/:id', async(req,res) => {
  const data = await Product.get(req.params.id);
  console.log(data)
  res.json(data)
})

app.listen(3001, () => console.log("Server started on port 3001"));
