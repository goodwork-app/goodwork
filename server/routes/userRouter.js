const express = require('express');
const userRouter = express.Router();

// Require in controllers with middleware
const userController = require('../controllers/userController');

// Define routes for userRouter
userRouter.post('/values', userController.addValue, (req, res) =>
  res.status(200).send('Successfully added value')
);

userRouter.post('/priorities', userController.addPriority, (req, res) =>
  res.status(200).send('Successfully added priority')
);

userRouter.delete('/values', userController.removeValue, (req, res) =>
  res.status(200).send('Successfully removed value')
);

userRouter.delete('/priorities', userController.removePriority, (req, res) =>
  res.status(200).send('Successfully removed priority')
);

// Export userRouter to be used by server.js
module.exports = userRouter;
