const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "cashier", "stockMg"]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    password: {
        type: String,
        default: "123"
    }
})

userSchema.pre("save", async function (next) {
    if (this.isModified("password"))  return next();
    var encryptedPassword = await bcrypt.hash(this.password, 12);
    this.password = encryptedPassword;
    next();
})

const User = new mongoose.model("user", userSchema);

module.exports = User;