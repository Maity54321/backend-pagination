const {pagi}  = require ('../controller/userController');

const express = require('express');

const router = express.Router();

router.get('/', pagi)

module.exports = {router}
// export default router;