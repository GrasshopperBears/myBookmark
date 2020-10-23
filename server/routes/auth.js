const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/auth/isAuth');
const signin = require('../middlewares/auth/signin');
const signup = require('../middlewares/auth/signup');
const logout = require('../middlewares/auth/logout');
const { afterSignup, afterSignin, isAuthController } = require('../controllers/auth');

router.get('/auth/is-auth', isAuth, isAuthController);
router.post('/auth/signup', signup, afterSignup);
router.post('/auth/signin', signin, afterSignin);
router.post('/auth/logout', logout);

module.exports = router;
