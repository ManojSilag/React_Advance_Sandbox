const User = require("../modals/user");
const jwt = require('jwt-simple');
const config = require('../config')

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
    
    console.log(req);
    
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
      return res.status(400).send({error: 'Email and password required'})
  }

  // if user with given  email exist
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    //if email does exits already send error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    //if user with email does not exist create and save record
     const user = new User({
       email: email,
       password: password    
     })

     user.save(function(err){
         if(err){ return next(err);}
     })

    //Respond to request indicating user was created
    res.json({token: tokenForUser(user)})
  });
};
