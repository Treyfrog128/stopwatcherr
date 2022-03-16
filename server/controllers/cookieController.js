const path = require('path');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('days', req.body.days);
  res.cookie('hours', req.body.hours);
  res.cookie('minutes', req.body.minutes);
  res.cookie('seconds', req.body.seconds);
  return next();
};

module.exports = cookieController;
