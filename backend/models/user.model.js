const mongoose=require('mongoose')

const userSchema=mongoose.Schema({ 
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    name :{
        type : String,
        required : true,
    },
    username :{
        type : String,
        required : true,
        unique : true
    },
    mobileNumber :{
        type : String,
        required : true,
    },
    gender :{
        type : String,
        
    },
    count :{
        type : Number,  
    },
    active :Boolean,
    
    
});

const userModel=mongoose.model("user",userSchema)

module.exports=userModel