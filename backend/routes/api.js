// backend/api.js
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    name: "Sri",
    referral: "sri2025",
    donations: 7500
  });
});

router.get('/leaderboard', (req, res) => {
  res.json([
    { name: "Sri", amount: 7500 },
    { name: "Amit", amount: 6400 },
    { name: "Riya", amount: 5000 }
  ]);
});

module.exports = router;
