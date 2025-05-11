const express = require('express');
const db = require('../db');
const sanitizeHtml = require('sanitize-html');
const router = express.Router();

// Insecure comment (XSS)
router.post('/comment', (req, res) => {
  const { username, comment } = req.body;
  const sql = `INSERT INTO comments (username, comment) VALUES ('${username}', '${comment}')`;
  db.run(sql, function (err) {
    if (err) return res.status(500).json({ message: 'Comment failed' });
    res.json({ message: 'Comment added (insecure)' });
  });
});

// Secure comment (XSS sanitized)
router.post('/secure-comment', (req, res) => {
  const { username, comment } = req.body;
  const clean = sanitizeHtml(comment, { allowedTags: [], allowedAttributes: {} });
  const sql = `INSERT INTO comments (username, comment) VALUES (?, ?)`;
  db.run(sql, [username, clean], function (err) {
    if (err) return res.status(500).json({ message: 'Comment failed' });
    res.json({ message: 'Comment added (secure)' });
  });
});

// Fetch all comments
router.get('/comment', (req, res) => {
  db.all('SELECT * FROM comments', (err, rows) => {
    res.json(rows);
  });
});

module.exports = router;
