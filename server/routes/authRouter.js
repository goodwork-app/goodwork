const express = require('express');
const authRouter = express.Router();

// Require in controllers with middleware
const auth = require('../controllers/authController');

// Define routes for authRouter
authRouter.post('/signup', auth.createUser, auth.createSession, (req, res) => {
  console.log('Responding to registration request');
  if (res.locals.userCreated === false) {
    console.log('Responding with 406')
    res.sendStatus(406);
  } else { 
    console.log('Responding with 200');
    res.sendStatus(200);
  }
});

authRouter.post('/signin', auth.signIn, auth.createSession, (req, res) => {
  console.log('Responding to sign in request');
  if( res.locals.user) {
    console.log('Returning user data to the client: ', res.locals.user);
    console.log('Cookies: ', res._headers["set-cookie"]);
    res.status(200).json(res.locals.user);
  } else {
    console.log('Returning 401 to the client');
    res.sendStatus(401);
  }
});

// Export authRouter to be used by server.js
module.exports = authRouter;
