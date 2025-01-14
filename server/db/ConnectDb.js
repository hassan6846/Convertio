

const mongoose=require("mongoose")

const ConnectDB=async(req,res,next)=>{
    try {
         await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
         console.log("MongoDB Connected")
         next()
    } catch (error) {
        console.log(error)
       res.status(500).json({
        sucess:false,
        message:"Server Error"
       })
    }
}

module.exports=ConnectDB