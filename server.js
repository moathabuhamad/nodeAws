const express = require('express');
const app = express();


app.listen(3000,()=>{
    console.log("Listening to port 3000");
});

app.get('/',(req,res)=>{
res.send("AWS IS COOL");
});