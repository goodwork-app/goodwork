const { Job, User } = require('../models/models');

const jobController = {};

// Add methods to jobController.
jobController.createJob = (req, res, next) => {
  const { company, jobTitle, status, link, notes, values, priorities } =
    req.body;
  Job.create({
    company,
    jobTitle,
    status,
    link,
    notes,
    values,
    priorities,
  })
    .then((dbRes) => {
      res.locals.job = dbRes;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error in createJob middleware',
        status: 500,
        message: { err: err },
      })
    );
};

jobController.addJob = (req, res, next) => {
  const { id } = req.body;
  const { job } = res.locals;
  User.findOneAndUpdate({ _id: id }, { $push: { jobs: job } })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in addJob middleware',
        status: 500,
        message: { err: err },
      })
    );
};

jobController.removeJob = (req, res, next) => {
  const { id, jobID } = req.body;
  Job.deleteOne({ _id: jobID })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in removeJob middleware',
        status: 500,
        message: { err: err },
      })
    );
};

// Export jobController.
module.exports = jobController;