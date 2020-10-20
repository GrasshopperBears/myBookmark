const User = require('./tables/user');

exports.findExistingUser = async (user_id, provider) => {
  try {
    const result = await User.findOne({ attribute: ['user_id'], where: { user_id, provider } });
    return result;
  } catch (e) {
    return e;
  }
};

exports.findUserInfo = async (user_id, provider) => {
  try {
    const result = await User.findOne({ where: { user_id, provider } });
    return result;
  } catch (e) {
    return e;
  }
};

exports.insertUser = async (user_id, user_name, password, provider) => {
  try {
    const result = await User.create({ user_id, user_name, password, provider });
    return result;
  } catch (e) {
    return e;
  }
};
