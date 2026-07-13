const express = require('express');
const router = express.Router();

// หน้าแรก
router.get('/', (req, res) => {
    res.render('index');
});

// หน้า History
router.get('/history', (req, res) => {
    res.render('history');
});

router.get('/page2', (req, res) => {
    res.render('page2');
});

// ส่งออก router
module.exports = router;