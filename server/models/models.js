const mongoose = require('mongoose');
require('dotenv').config;

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { dbName: 'goodwork' })
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  displayName: String,
  displayGoal: String,
  avatar: {
    data: Buffer,
    contentType: String,
  },
  values: [String],
  priorities: [String],
  jobs: [{
    company: String,
    jobTitle: String,
    status: {
      type: String,
      enum: ['Applied', 'Interviewed', 'Hired'],
      default: 'Applied',
    },
    link: String,
    notes: String,
    values: [String],
    priorities: [String],
  }],
});

const User = mongoose.model('user', userSchema);

const sessionSchema = new mongoose.Schema({
  userID: String,
  createdAt: {
    type: Date,
    expires: 1200,
    default: Date.now,
  },
});

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  Session,
};
