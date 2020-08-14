const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogUserSchema = new Schema({
  email: { type: String, required: true}
});


const blogUser = mongoose.model("blog user", blogUserSchema);

module.exports = blogUser;