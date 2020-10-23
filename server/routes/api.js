const express = require('express');
const router = express.Router();
const searchBook = require('../middlewares/searchBook');
const searchBookController = require('../controllers/searchBookController');
const ocr = require('../middlewares/ocr');
const ocrController = require('../controllers/ocrController');

router.get('/api/search/book', searchBook, searchBookController);
router.post('/api/ocr', ocr, ocrController);

module.exports = router;
