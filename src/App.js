const express = require('express');

const app = express();

app.use("/test",(req, res) =>{
    res.send("server is listening Ankur")
    
})
app.use("/login", (req,res)=>{
    res.send("Server is not listening ")
})

app.listen(9000, ()=>{
    console.log("Server is Listening")

});