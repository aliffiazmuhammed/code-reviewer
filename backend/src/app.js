const express = require('express')
const airoutes = require('../router/ai.router')
const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/ai',airoutes)

module.exports = app;