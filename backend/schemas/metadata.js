const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let metaSchema = new Schema({
  originalname: String,
  filename: String,
  path: String,
  user_id:String
});

const Meta = mongoose.model("Meta", metaSchema);
module.exports = Meta;
