var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./user')
const {comparePassword} = require('./password');

 passport.use(
  new LocalStrategy(async (username, password, done) => {
     var user = await User.getUser(username);
     if (user.length === 1) {
       console.log(user);
       const pwdCorrect = await comparePassword(password, user[0].password);
       if (pwdCorrect) {
        return done(null, user[0]);
      }
    }
    return done(null, false);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
   User.findById(id)
      .then((user) => {
         done(null, user[0]);
       })
      .catch((error) => {
         console.log(`Error: ${error}`);
    });
});
