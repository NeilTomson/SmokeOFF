const mongoose=require("mongoose");
const SmokeSettingsSchema=new mongoose.Schema({
    pack:{
        type:Number,
        require:true
    },
    costOfPack:{
        type:Number,
        require:true
    },
    timeOfSmoke:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model("SmokeSettings",SmokeSettingsSchema)