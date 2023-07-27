// Create web server
// ----------------

// Import module
const express = require('express');
const router = express.Router();

// Import controller
const commentsCtrl = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.post('/', auth, multer, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// Export
module.exports = router;