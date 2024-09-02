const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/lms").then(()=>{
    console.log('connection Success!')
}).catch((err)=>{
    console.log('connection faild', err)
})
      
