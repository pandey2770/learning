
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
  try {
    const data = await User.signUp(req.body.username,req.body.password);
    passport.authenticate('local')(req, res, function () {
      res.sendStatus(200);
    });
  } catch(exp) {
    if (exp.constraint === 'demouser_email_key') {
      res.status(400).jsonp({ error: 'Email is already registered.'});
    } else {
      res.sendStatus(500);
    }
  }
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
  let id = [req.params.id];
  const data = await Product.get(id);
   res.json(data)
 })

app.post('/api/cart/:cartid' , async(req, res) =>{
  const data = await Product.postCart(req.user.id, req.params.cartid);
  res.json(req.user.id)
})

app.delete('/api/cartdelete/:id' , async(req, res) => {
  const data = await Product.deleteFromCatr(req.user.id, req.params.id);
  res.json(req.user.id);
})

app.get('/api/cartdetail', async(req,res) => {
  const data = await Product.cartdetail(req.user.id);
  if (data !== undefined || null) {
  res.json(data)
  }
});

app.listen(3001, () => console.log("Server started on port 3001"));
