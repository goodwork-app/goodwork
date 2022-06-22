const express = require('express');
const userRouter = express.Router();

// Require in controllers with middleware
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Define routes for userRouter
userRouter.post('/values', authController.authenticateUser, userController.addValue, (req, res) =>
  res.status(200).send('Successfully added value')
);

userRouter.post('/priorities', authController.authenticateUser, userController.addPriority, (req, res) =>
  res.status(200).send('Successfully added priority')
);

userRouter.delete('/values', authController.authenticateUser, userController.removeValue, (req, res) =>
  res.status(200).send('Successfully removed value')
);

userRouter.delete('/priorities', authController.authenticateUser, userController.removePriority, (req, res) =>
  res.status(200).send('Successfully removed priority')
);

// Export userRouter to be used by server.js
module.exports = userRouter;
