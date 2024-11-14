const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let metaSchema = new Schema({
  originalname: String,
  filename: String,
  path: String,
  user_id: String,
  key: String,
  iv: String,
});

const Meta = mongoose.model("Meta", metaSchema);
module.exports = Meta;
