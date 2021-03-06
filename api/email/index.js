const { Router } = require('express');
const router = new Router();

const controller = require('./mail.controller');
router.post('/', controller.sendEmail)
router.post('/send-email', controller.sendEmailSummary)
router.get('/:_id', controller.retrieveEmailSentsByUser)

module.exports = router
