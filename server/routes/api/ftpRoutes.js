const express = require('express');
const router = express.Router();
const ftpCtrl = require('../../controllers/ftpCtrl');
// const checkToken = require('../../controllers/authCtrl');


router.post('/upload', /*checkToken,*/ ftpCtrl.upload);
router.get('/getUploadedFiles', ftpCtrl.getFiles)
router.get('/download', ftpCtrl.download);
router.post('/alamanoPdf', ftpCtrl.alamanoPdf);
router.get('/fetchPDF', ftpCtrl.fetchPDF);

module.exports = router;
