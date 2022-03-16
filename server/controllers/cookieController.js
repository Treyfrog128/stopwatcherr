const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('meow', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 100));
  return next();
};

module.exports = cookieController;
