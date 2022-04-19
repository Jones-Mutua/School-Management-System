const express = require('express');
const { refreshtoken, login, getAllUsers, logout } = require('../controllers/auth.controllers');
const router = express.Router();

router.get('/get-all-users', getAllUsers);

router.post('/login', login);

router.post('/refresh_token', refreshtoken);

router.post('/logout', logout);

module.exports = router;