const passport = require('passport');
const User = require('../modals/user');
const config = require('../config');
const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for jwt Strtergy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: config.secret
}


//Create JWT stratergy
const jwtLogin = new JwtStratergy(jwtOptions, function(payload, done){
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false

  User.findById(payload.sub, function(err, user){
      if(err){ return done(err, false)}

      if(user){
        done(null , user);
      }else{
          done(null, false);
      }
      
  })
});



//Tell passport to use stratergy
passport.use(jwtLogin);