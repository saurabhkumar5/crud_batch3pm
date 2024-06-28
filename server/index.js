const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

app.post('/home',(req,res)=>{
        
    console.log(req.body)

    res.send("hello from backend")

})




app.listen(5500,()=>console.log("server is started"))