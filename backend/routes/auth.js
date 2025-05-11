const express = require("express");
const db = require("../db");
const router = express.Router();

// Vulnerable login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  db.get(sql, (err, row) => {
    if (row) {
      res.cookie("username", username, { httpOnly: true });
      res.json({ message: "Login successful (insecure)" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Secured login
router.post("/secure-login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.get(sql, [username, password], (err, row) => {
    if (row) {
      res.cookie("username", username, { httpOnly: true });
      res.json({ message: "Login successful (secure)" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Vulnerable register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  db.run(sql, function (err) {
    if (err) return res.status(500).json({ message: "Registration error" });
    res.json({ message: "User registered (insecure)" });
  });
});

// Secured register
router.post("/secure-register", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.run(sql, [username, password], function (err) {
    if (err) return res.status(500).json({ message: "Registration error" });
    res.json({ message: "User registered (secure)" });
  });
});

router.post("/logout", (req, res) => {
  res.cookie("username", "", { httpOnly: true });
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
