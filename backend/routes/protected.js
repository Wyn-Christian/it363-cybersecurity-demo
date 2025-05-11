const express = require("express");
const router = express.Router();

// Insecure dashboard access
router.get("/dashboard", (req, res) => {
  res.json({ message: "Welcome to insecure dashboard (no auth check)" });
});

// Secure dashboard with cookie check
router.get("/secure-dashboard", (req, res) => {
  console.log(req.cookies.username);
  if (!req.cookies.username) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json({ message: `Welcome ${req.cookies.username} to secure dashboard` });
});

module.exports = router;
