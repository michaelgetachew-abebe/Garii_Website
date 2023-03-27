const router = require("express").Router();

const {
  getintouch,
  getintouchgmail,
} = require("../controller/appController.js");
/** HTTP Reqeust */
router.post("/user/getintouch", getintouch);
router.post("/user/getintouchgmail", getintouchgmail);
module.exports = router;
