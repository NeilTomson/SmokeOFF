const express  = require("express")
const  app =  express()
const port = 8000
const mongoose =require("mongoose")
const cors = require("cors");
const SmokeRouter =require("./router/smoke")
const Settings =require("./router/settings")

app.use(express.json());
app.use(cors());
//db
require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
}); 
app.use("/smoke",SmokeRouter)
app.use("/settings",Settings)


app.listen(port,()=>{
    console.log(`the server is runing on port ${port}`)
})