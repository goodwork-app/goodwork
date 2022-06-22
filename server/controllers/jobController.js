const { User } = require('../models/models');

const jobController = {};

jobController.addJob = (req, res, next) => {
  const { id } = req.cookies.sessionID;
  const { jobID, company, jobTitle, status, link, notes, values, priorities } =
    req.body;
  const job = {
    company,
    jobTitle,
    status,
    link,
    notes,
    values,
    priorities,
  };

  if (jobID) job._id = jobID;

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
  const { id } = req.cookies.sessionID;
  const { jobID } = req.body;
  User.findOneAndUpdate({ _id: id }, { $pull: { jobs: { _id: jobID } } })
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
