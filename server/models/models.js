const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://goodwork:goodwork-la50@goodwork-cluster.jhyos.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, { dbName: 'goodwork' })
  .then(() => console.log('Connected to mongodb'))
  .catch((err) => console.log(err));

const jobSchema = new mongoose.Schema(
  {
    company: String,
    jobTitle: String,
    status: {
      type: String,
      enum: ['Applied', 'Interviewed', 'Hired'],
      default: 'Applied',
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('job', jobSchema);

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
  jobs: [jobSchema],
});

const User = mongoose.model('user', userSchema);

const sessionSchema = new mongoose.Schema({
  userID: String,
  createdAt: {
    type: Date,
    expires: 30,
    default: Date.now,
  },
});

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  User,
  Job,
  Session,
};
