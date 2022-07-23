const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  shopno: {
    type: String,
    default: "15A"
  },
  address: {
    type: String,
    default: "14I HIG, Ratanlal Nagar"
  },
  phoneNo:{
    type : Number,
    default : 89359494904
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;