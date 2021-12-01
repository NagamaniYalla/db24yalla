const mongoose = require("mongoose") 
const nachosSchema = mongoose.Schema({flavour: String, taste: String, cost: {type:Number,min:15,max:100}}) 
 
module.exports = mongoose.model("nachos", nachosSchema) 
