const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  twitterId: String
});

mongoose.model("user", UserSchema);
