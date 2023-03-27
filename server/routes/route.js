const router = require('express').Router();

const { getintouch } = require("../controller/appController.js");
/** HTTP Reqeust */
router.post('/user/getintouch', getintouch)

module.exports = router;