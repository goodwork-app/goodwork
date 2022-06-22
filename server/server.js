const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Cookie parsing
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Parse incoming json
app.use(express.json());

// Require in routers.
const authRouter = require('./routes/authRouter');
const jobRouter = require('./routes/jobRouter');
const userRouter = require('./routes/userRouter');

// Serves static file from the dist directory.
app.use(express.static(path.resolve(__dirname, '../dist')));

// Handles all requests to the auth endpoint.
app.use('/auth', authRouter);

// Handles all requests to the jobs endpoint.
app.use('/job', jobRouter);

// Handles all requests to the user endpoint.
app.use('/user', userRouter);

// Error handler for requests to undefined routes.
app.use((req, res) =>
  res.status(404).send('Cannot serve request to undefined endpoint')
);

// Global error handler.
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const customError = Object.assign({}, defaultError, err);

  console.log(customError.log);

  return res.status(customError.status).json(customError.message);
});

// Connect the server to a port.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});