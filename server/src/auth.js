var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var User = require('./user')

passport.use(
  new LocalStrategy((username, password, done) => {
    // var user = await User.getUser(username, password);
    // if (user.length === 1) {
    //   return done(null, user[0]);
    // } else {
    //   return done(null, false);
    // }
    return done(null, { username: 'abhi', password: 'pwd' });
  })
);

passport.serializeUser((user, done) => {
  done(null, '123');
  // done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, { username: 'abhi', password: 'pwd' });
  //   User.findById(id)
  //     .then((user) => {
  //       done(null, user);
  //     })
  //     .catch((error) => {
  //       console.log(`Error: ${error}`);
  //     });
});
