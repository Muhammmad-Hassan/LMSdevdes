const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://hassan:hassan123@cluster0.1uazb.mongodb.net/lms?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('connection Success!')
}).catch((err)=>{
    console.log('connection faild', err)
})
      
