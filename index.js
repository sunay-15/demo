const express = require("express");
const app = express();

app.get('/',function(req,res) {
 const a = req.query.user
 const b = req.query.pass

 if(user==1 && pass == 5)
 res.send("Access Granted")

 else
 res.send("The input is wrong")
})


app.listen(3000);
