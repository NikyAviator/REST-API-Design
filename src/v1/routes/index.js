// Simple router, STEP 1:
const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send(`<h3>Hello from ${req.baseUrl} </h3>`);
});

module.exports = router;
