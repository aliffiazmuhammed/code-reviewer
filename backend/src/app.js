const express = require('express')
const airoutes = require('../router/ai.router')
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: '*',  // Allow local frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/ai',airoutes)

module.exports = app;