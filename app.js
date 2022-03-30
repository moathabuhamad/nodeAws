const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log("Listening to port 3000");
});

app.get('/',(req,res)=>{
res.send("AWS IS COOL");
});