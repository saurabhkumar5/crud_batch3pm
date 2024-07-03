const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://saurabhmaurya8626:3S8fBA3ezmVmIksp@cluster0.6hda3nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((value)=>console.log("database is connected"))

}

const userSchema = new mongoose.Schema({
  value:String
})

const model = mongoose.model('momo',userSchema)


app.get('/',(req,res)=>{

       model.find({})
       .then((a)=>res.json(a))
      //  res.send("hello")
})


app.post('/home',(req,res)=>{
        
    console.log(req.body)
    model.create(req.body)

    res.send("hello from backend")

})




app.listen(5500,()=>console.log("server is started"))