const express = require('express');
const router = express.Router();
const ftp = require('./ftpRoutes');
// const user = require('./userRoute');

router.use('/ftp', ftp);
// router.use('/user', user);

module.exports = router;