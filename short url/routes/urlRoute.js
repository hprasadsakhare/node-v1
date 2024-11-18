const express = require('express');
const { handleGenerateNewShortURL, updateShortURL, handleGetAnalytics } = require('../controllers/urlController');
const router = express.Router();

router.post("/", handleGenerateNewShortURL);        // Route for creating a new short URL
router.patch("/:id", updateShortURL);               // Route for updating an existing short URL
router.get('/analytics/:shortId', handleGetAnalytics);  // Route for analytics

module.exports = router;
