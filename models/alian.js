var mongoose=require('mongoose');
var { Schema }= mongoose;

var alianSchema=mongoose.model('alian',new Schema({
    name:{
        type:String,
        required:true,
    },
    tech:{
        type:String,
        required:true,
    },
    sub:{
        type:Boolean,
        required:true,
        default:false,
    }
}));

module.exports=alianSchema;