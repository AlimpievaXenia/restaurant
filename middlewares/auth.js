function noSessionChecker(req, res, next) {
  if (!req.session.login) {
    res.redirect('/user/signin');
  }
  next();
}

function haveSession(req, res, next) {
  if (req.session.login) {
    res.redirect('/');
  }
  next();
}

module.exports = { noSessionChecker, haveSession };
