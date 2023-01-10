const mongoose=require("mongoose");
const SmokeSchema=new mongoose.Schema({
    date:{
        type:Date,
        require:true
    },
    number:{
        type:Number,
        require:true
    }

})

module.exports=mongoose.model("Smoke",SmokeSchema)