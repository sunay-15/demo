const express = require("express");
const app = express();

app.get('/demo',function(req,res) {
 const a = req.query.user
 const b = req.query.pass

 if(user==gargi && pass == gargi24)
 res.send("Access Granted")

 else
 res.send("The input is wrong")
})


app.listen(3000);