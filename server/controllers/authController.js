// require the models
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
  models.User.find({username: req.body.userename})
    .then((records) => {
      if(records.length === 0) {
        console.log(`Username '${req.body.username} is available. Creating now...`);
        res.locals.createSession = true;
        //hash and store the new user's password
        return bcrypt.hash(req.body.password, saltRounds);
      } else {
        console.log(`Username '${req.body.username} is not available.`);
        res.locals.createSession === false;
        return next();
      }
    })
    .then((hash) => 
      models.User.create({
        username: req.body.username,
        password: hash,
      })
    )
    .then(() => {
      return next();
    })
    .catch((err) => 
      console.log('An error occurred while creating a new user account: ', err)
    );

};

authController.authenticateUser = function (req, res, next) {

};

authController.signIn = function (req, res, next) {

};

/*
if(res.locals.available === false )
The username will be available at req.body.username
retrieve the userid from the database via the username
insert a session document into the sssions model with the _id 
create a cookie using res.cookie() with the userID
return next

*/
authController.createSession = function (req, res, next) {
  if(!res.locals.createSession){
    return next();
  } else {
    models.User.find({username: req.body.username})
      .then((userArray) => {
        const userID = userArray[0]._id;
        return models.Session.create({userID});
      })
      then(() => {
        return next()
      })
      .catch( (err) => 
        console.log(`There was an error creating a session for user: ${req.body.username} with userID: ${userID} - `, err)
      );
  }
};