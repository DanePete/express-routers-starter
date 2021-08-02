const express = require('express');
const bookList = [];

// Make a router
// a router is like a mini app
const router = express.Router();

// We can use `router` just like we use app
// The actual URL here is "/book"
router.get('/', (req, res) => {
  res.send(bookList);
});

router.post('/', (req, res) => {
  bookList.push(req.body);
  res.sendStatus(200);
});

// Export our books "mini app"
module.exports = router;

