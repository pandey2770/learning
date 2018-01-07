var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var User = require('./user')

passport.use(new LocalStrategy(
  (username, password, done) => {
      try {
      console.log('-----------------------------------1');
    // var user = await User.getUser(username, password);
    // if (user.length === 1) {
    //   return done(null, user[0]);
    // } else {
    //   return done(null, false);
    // }
    return done(null, {username: 'abhi', password: 'pwd'});
      }catch(exp) {console.log(exp)}
  }
));

passport.serializeUser((user, done) => {
    console.log('-----into serializeUser----2')
  done(null, "123");
});

passport.deserializeUser((id, done) => {
    console.log('-----into deserializeUser----3')
    done(null, {username: 'abhi', password: 'pwd'});
//   User.findById(id)
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((error) => {
//       console.log(`Error: ${error}`);
//     });
});