const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    },
    positivity: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    genre: {
        type: [String],
        required: true,
        validate(value) {
            if (value.length < 2) {
                throw new Error("Genre length should be greater than 2");
            }
        },
    },
});

userSchema.statics.findByEmail = async (email) => {
    const user = await User.findOne({
        email,
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
