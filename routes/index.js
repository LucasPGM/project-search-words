const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.post('/word', (req, res) => {
    try{
        const word = req.body;
        axios.get(`https://api.datamuse.com/words?sl=${word}`).then(response => {
            res.send(response.data);
        })

    }catch (error) {
        res.json(error);
    }
});


module.exports = router;