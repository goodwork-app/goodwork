const { User } = require('../models/models');

const userController = {};

// Add methods to userController.
userController.addValue = (req, res, next) => {
  const { id } = req.cookies.sessionID;
  const { value } = req.body;
  User.findOneAndUpdate({ _id: id }, { $push: { values: value } })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in addValue middleware',
        status: 500,
        message: { err: err },
      })
    );
};

userController.addPriority = (req, res, next) => {
  const { id } = req.cookies.sessionID;
  const { priority } = req.body;
  User.findOneAndUpdate({ _id: id }, { $push: { priorities: priority } })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in addPriority middleware',
        status: 500,
        message: { err: err },
      })
    );
};

userController.removeValue = (req, res, next) => {
  const { id } = req.cookies.sessionID;
  const { value } = req.body;
  User.findOneAndUpdate({ _id: id }, { $pull: { values: value } })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in removeValue middleware',
        status: 500,
        message: { err: err },
      })
    );
};

userController.removePriority = (req, res, next) => {
  const { id } = req.cookies.sessionID;
  const { priority } = req.body;
  User.findOneAndUpdate({ _id: id }, { $pull: { priorities: priority } })
    .then((dbRes) => next())
    .catch((err) =>
      next({
        log: 'Error in removePriority middleware',
        status: 500,
        message: { err: err },
      })
    );
};

// Export userController.
module.exports = userController;
