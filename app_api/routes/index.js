var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});
var ctrlBooks = require('../controllers/books');
var ctrlAuth = require('../controllers/authentication');

router.get('/books', auth, ctrlBooks.booksList);
router.post('/books', auth, ctrlBooks.booksCreate);
// router.get('/books/:bookid', ctrlBooks.booksReadOne);
router.put('/books/:bookid', auth, ctrlBooks.booksUpdateOne);
router.delete('/books/:bookid', auth, ctrlBooks.booksDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
