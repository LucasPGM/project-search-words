const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/word', (req, res) => {
        res.render('sound');
});


module.exports = router;