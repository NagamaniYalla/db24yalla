const mongoose = require("mongoose") 
const nachosSchema = mongoose.Schema({flavour: String, taste: String, cost: Number}) 
 
module.exports = mongoose.model("nachos", nachosSchema) 