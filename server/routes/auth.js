const express = require('express');
const router = express.Router();
const signin = require('../middlewares/auth/signin');
const signup = require('../middlewares/auth/signup');
const logout = require('../middlewares/auth/logout');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

module.exports = router;
