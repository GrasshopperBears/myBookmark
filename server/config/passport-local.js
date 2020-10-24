const passport = require('passport');
const bcrypt = require('bcryptjs');
const { findUserInfo } = require('../models/queries');
const LocalStrategy = require('passport-local').Strategy;

const passportLocalConfig = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id',
        passwordField: 'password',
      },
      async (id, password, done) => {
        try {
          const result = await findUserInfo(id, 'local');
          if (!result) return done(null, false, { message: '잘못된 사용자 정보입니다.' });
          const compareResult = bcrypt.compareSync(password, result.dataValues.password);
          if (!compareResult) return done(null, false, { message: '잘못된 사용자 정보입니다.' });
          return done(null, result.dataValues.id);
        } catch (e) {
          return done(e);
        }
      }
    )
  );
};

module.exports = passportLocalConfig;
