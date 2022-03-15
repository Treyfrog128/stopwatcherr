const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// converts the buffer data into readable data
app.use(express.json());

// handle requests for static files
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'index.html'));
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  // log the error to the console
  console.log('Error: ', errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

module.exports = app;
