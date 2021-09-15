var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    photo: { type: String },
  },
  { timestamp: true }
);
module.exports = mongoose.model("User", userSchema);
