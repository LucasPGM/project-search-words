const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, ()=> {
    console.log(`Api rodando na porta: ${process.env.PORT} / ${new Date()}`);
})