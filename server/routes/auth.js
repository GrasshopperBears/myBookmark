const express = require('express');
const router = express.Router();
const signin = require('../middlewares/auth/signin');
const signup = require('../middlewares/auth/signup');
const logout = require('../middlewares/auth/logout');
const { afterSignup, afterSignin } = require('../controllers/auth');

router.post('/auth/signup', signup, afterSignup);
router.post('/auth/signin', signin, afterSignin);
router.post('/auth/logout', logout);

module.exports = router;
