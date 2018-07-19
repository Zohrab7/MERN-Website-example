const {Schema} =require("mongoose");
module.exports.ChatSchema = new Schema({
    name:{type:String},    email: {type:string},
    message: {type:string}
});
