const express = require('express');
const jobRouter = express.Router();

// Require in controllers with middleware
const jobController = require('../controllers/jobController');

// Define routes for jobRouter
jobRouter.post('/', jobController.createJob, jobController.addJob, (req, res) =>
  res.status(200).send('Successfully added job')
);

// jobRouter.patch('/', jobController.updateJob, (req, res) =>
//   res.status(200).send('Successfully updated job')
// );

jobRouter.delete('/', jobController.removeJob, (req, res) =>
  res.status(200).send('Successfully removed job')
);

// Export jobRouter to be used by server.js
module.exports = jobRouter;
