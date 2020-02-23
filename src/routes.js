const { Router } = require('express');

const LogEntryController = require('./controllers/LogEntryController');

const router = Router();

// Logs routes
router.get('/logs', LogEntryController.index);

router.post('/logs', LogEntryController.store);

module.exports = router;
