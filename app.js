const express = require("express")

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello CD setup has been done ")
})

module.exports =app
