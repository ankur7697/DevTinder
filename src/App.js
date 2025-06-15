const express = require('express');

const app = express();

app.get("/user", (req, res)=>{
    res.send({firstname: "Ankur" , lastname:"Sharma"});
})

app.post("/user", (req, res)=>{
    res.send("Data sent")
})

app.delete("/user", (req, res)=>{
    res.send("Deleted")
})
app.use("/test",(req, res) =>{
    res.send("server is listening Ankur");
    
});


app.listen(9000, ()=>{
    console.log("Server is Listening")

});