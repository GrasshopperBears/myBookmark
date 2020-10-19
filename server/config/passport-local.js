const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const passportLocalConfig = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id',
        passwordField: 'password',
        session: false,
      },
      (id, password, done) => {}
    )
  );
};

module.exports = passportLocalConfig;
