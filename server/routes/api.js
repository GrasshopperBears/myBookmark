const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/auth/isAuth');
const apiAuthController = require('../controllers/apiAuthController');
const searchBook = require('../middlewares/searchBook');
const searchBookController = require('../controllers/searchBookController');
const ocr = require('../middlewares/ocr');
const ocrController = require('../controllers/ocrController');
const addBook = require('../middlewares/addBook');
const addBookmark = require('../middlewares/addBookmark');
const addBookmarkController = require('../controllers/addBookmarkController');
const searchBookmark = require('../middlewares/searchBookmark');
const searchBookmarkController = require('../controllers/searchBookmarkController');
const { deleteBookmarkById, deleteBookmarkByBookId } = require('../middlewares/deleteBookmark');
const deleteBookmarkController = require('../controllers/deleteBookmarkController');

router.all(/\/api\/.+/, isAuth, apiAuthController);
router.get('/api/search/book', searchBook, searchBookController);
router.get('/api/bookmark', searchBookmark, searchBookmarkController);
router.post('/api/bookmark', addBook, addBookmark, addBookmarkController);
router.post('/api/ocr', ocr, ocrController);
router.delete('/api/bookmark/:id', deleteBookmarkById, deleteBookmarkController);
router.delete('/api/bookmark/book/:bookId', deleteBookmarkByBookId, deleteBookmarkController);

module.exports = router;
