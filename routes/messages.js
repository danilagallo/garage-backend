var express = require('express');
var router = express.Router();
const messageController = require('../controllers/messageController');

/* GET messages listing. */
router.get('/', messageController.getAllMessages);

/* GET message */
router.get('/message/:messageId', messageController.getMessage);

/* Post message */
router.post('/', messageController.addMessage);

/* Delete message */
router.patch('/message/:messageId', messageController.editMessage);

/* Delete message */
router.delete('/message/:messageId', messageController.removeMessage);

module.exports = router;
