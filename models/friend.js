const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Game = require("./Game");
// const passportLocalMongoose = require('passport-local-mongoose');

// const bcrypt = require("bcryptjs");
const FriendSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"]
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please provide valid email"
    ]
  },
  show: {
      type: String,
      required: [true, "Please provide at least one show"]
  },
  address: {
      type: String,
      required: [true, "Please enter your address. It will not be displayed."]
  }
})

// UserSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// }
//   UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
//     next();
//   })
  
  
  
  // const User = mongoose.model("User", UserSchema);

// });

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("Friend", FriendSchema)
