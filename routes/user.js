const express = require("express");
const { read, update } = require("../controllers/user");
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const router = express.Router();




router.get('/user/:id', requireSignin, read);
router.put('/user/update', requireSignin, update);
router.put('/admin/update', requireSignin, adminMiddleware, update);



module.exports = router;