// require mongoose
// require the user model
// require bCrypt

const authController = {};

/*
username, password, and name will be properties on req.body

check the user model for the username
  if the username is not available set res.body.available to false
  else
    set res.locals.available to true
    create hashed password for the user with bcrypt
    create a new user with the user model - return the _id
    attach the id as res.locals.userID
return next

*/
authController.createUser = function (req, res, next) {

};

authController.authenticateUser = function (req, res, next) {

};

authController.signIn = function (req, res, next) {

};

/*
The userid will be available at res.locals.userID
insert a session document into the sssions model
create a cookie using res.cookie() with the userID
return next

*/
authController.createSession = function (req, res, next) {

};