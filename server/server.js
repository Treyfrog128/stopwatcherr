const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const cookieController = require('./controllers/cookieController');

const app = express();
const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true })); // parses request body into JSON
// app.use(cookieParser()); // parses cookies from JSON into object

app.use(express.json()); // converts the buffer data into readable data

app.use(express.static('client')); // handle requests for static files

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'index.html'));
});

// app.post('/set', cookieController.setCookie, (req, res) => { // post to /set to handle cookie data
//   res.redirect('/');
// });

app.listen(PORT, () => { // start server
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
