const mongoose =require('mongoose');
let {db_connect}= require ("./db_config");
const {ChatSchema} =require ("./schemas");
db_connect(mongoose);
module.exports.ChatDb = mongoose.model("ChatSchema", ChatSchema);
