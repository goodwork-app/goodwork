// require in the models
const models = require('../models/models');


// bcrypt necessities
const saltRounds = 10; 
const bcrypt = require('bcrypt');

const authController = {};

/*
username, password, and name will be properties on req.body
check the user model for the username
  if the username is not available set res.body.available to false
  else
    set res.locals.createSession to true
    create hashed password for the user with bcrypt
    create a new user with the user model - return the _id
    attach the id as res.locals.userID
return next
*/
authController.createUser = function (req, res, next) {
  console.log('REQ.BODY: ', req.body);
  console.log('Looking to see if the above username is available');
  models.User.find({username: req.body.username})
    .then((records) => {
      if(records.length === 0) {
        console.log(`Username '${req.body.username}' is available. Creating now...`);
        res.locals.createSession = true;
        //hash and store the new user's password
        bcrypt.hash(req.body.password, saltRounds)
          .then((hash) => {
            console.log('Inserting the new user into the database.');
            //console.log(hash);
            return models.User.create({
              username: req.body.username,
              password: hash,
            });
          })
          .then((createdUser) => {
            console.log('Moving to session creation...');
            return next();
          })
          .catch((err) => {
            console.log('An error occurred while creating a new user account: ', err);
            return next(err);
          });
      } else {
        console.log(`Username '${req.body.username} is not available.`);
        res.locals.createSession = false;
        res.locals.userCreated = false;
        return next();
      }
    })
    .catch((err) => {
      console.log('An error occurred checking username availability: ', err);
      return next(err);
    });
};

/*
Check the sessionID cookie of the request
if the session id is in the session collection then 
  set res .locals.authenticated to true
If the session id is not in the session collection
  set res.locals.authenticated to false
return next 
*/
authController.authenticateUser = function (req, res, next) {
  const userID = req.cookies.sessionID;
  console.log(`Attempting user authentication. ID: ${userID}`);
  models.Session.findOne({userID})
    .then((foundUser) => {
      console.log('Results of looking for session: ', foundUser);
      if(foundUser){
        return next()
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.log('An error occurred checking while authenticationg the user: ', err);
      return next(err);
    });
};

/*
username and password are stored on req.body
first, attempt to find the user in the users db
if the user exists
  compare the passwords
  if the passwords dont match res.sendstatus(401)
  if the passwords do match then s
    et res.locals.createSession to true
    remove _id, __v, and password from user
    attach the user to res.locals
    return next
if the user does not exist
  hash the password
  sendStatus(401);
*/
authController.signIn = function (req, res, next) {
  console.log(`Attempting to sign in username: ${req.body.username}`);
  models.User.findOne({username: req.body.username}).lean()
    .then((foundUser) => {
      console.log('Results of looking for user for sign in: ', foundUser);
      if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password)
          .then((result) => {
            if (result) {
              res.locals.createSession = true;
              delete foundUser._id;
              delete foundUser.__v;
              delete foundUser.password;
              res.locals.user = foundUser;
            } else {
              res.locals.createSession = false;
            }
            return next();
          })
      } else {
        bcrypt.hash(req.body.password, saltRounds);
        res.locals.createSession = false;
        return next();
      }
    });
};

/*
if(res.locals.createSession === false ) then return next
The username will be available at req.body.username
retrieve the userid from the database via the username
insert a session document into the sssions model with the _id 
create a cookie using res.cookie() with the userID
return next

*/
authController.createSession = function (req, res, next) {
  if(!res.locals.createSession){
    console.log('Skipping session creation')
    return next();
  } else {
    console.log('Looking up username to create a session...');
    models.User.find({username: req.body.username}).lean()
      .then((userArray) => {
        console.log('Results from the search for the user for session creation: ', userArray[0]._id);
        res.locals.userID = userArray[0]._id;
        return models.Session.create({userID: res.locals.userID});
      })
      .then(() => {
        console.log(`Session successfully created. Adding a cookie: ${res.locals.userID}`);
        res.cookie('sessionID', res.locals.userID);
        return next();
      })
      .catch( (err) => {
        console.log(`There was an error creating a session for user: ${req.body.username} - `, err);
        return next(err);
    });
  }
};

// Export the authController;
module.exports = authController;