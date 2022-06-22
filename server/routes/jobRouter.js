const express = require('express');
const jobRouter = express.Router();

// Require in controllers with middleware
const authController = require('../controllers/authController');
const jobController = require('../controllers/jobController');

// Define routes for jobRouter
jobRouter.post('/', authController.authenticateUser, jobController.addJob, (req, res) =>
  res.status(200).send('Successfully added job')
);

jobRouter.patch('/', authController.authenticateUser, jobController.removeJob, jobController.addJob, (req, res) =>
  res.status(200).send('Successfully updated job')
);

jobRouter.delete('/', authController.authenticateUser, jobController.removeJob, (req, res) =>
  res.status(200).send('Successfully removed job')
);

// Export jobRouter to be used by server.js
module.exports = jobRouter;
