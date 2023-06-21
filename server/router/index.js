const express = require('express');
const userRouter = require('./users');
const router = express.Router();
const status = require('./status');

router.use("/user", userRouter);
router.use("/status",status );

module.exports = router;