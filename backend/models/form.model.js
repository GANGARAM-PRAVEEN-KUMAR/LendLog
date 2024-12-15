const mongoose=require('mongoose')

const formSchema=mongoose.Schema({ 
    lenderEmail :{
        type : String,
        required : true,
    },
    borrowerEmail :{
        type : String,
        required : true,
    },

    bFatherName :{
        type : String,
    },
    lName :{
        type : String,
        required : true,
    },
    bName :{
        type : String,
        required : true,
    },
    lUsername :{
        type : String,
        required : true,
    },
    bUsername :{
        type : String,
    },
    bMobileNumber :{
        type : String,
    },
    bAadharNo :{
        type : String,
    },
    amount :{
        type : String, 
    },
    interest :{
        type : String,  
    },
    period :{
        type : String,   
    },
    startDate :{
        type : Date,   
    },
    endDate :{
        type : Date,  
    },
    bSign :{
        type : Buffer,  
    },

});

const formModel=mongoose.model("form",formSchema)

module.exports=formModel