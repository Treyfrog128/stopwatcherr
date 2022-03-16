const path = require('path');

const cookieController = {};



cookieController.setCookie = (req, res, next) => {
  res.cookie('meow', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 100));
  console.log(req.body)
  return next();
};

module.exports = cookieController;
