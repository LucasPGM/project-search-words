const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/index');

const app = express();
dotenv.config();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);


app.listen(process.env.PORT, ()=> {
    console.log(`Api rodando na porta: ${process.env.PORT} / ${new Date()}`);
})