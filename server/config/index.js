const passportLocalConfig = require('./passport-local');

const passportConfig = () => {
  passportLocalConfig();
};

module.exports = passportConfig;
