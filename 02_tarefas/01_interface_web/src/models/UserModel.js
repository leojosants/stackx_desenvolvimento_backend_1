const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        dob: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
            require: true,
        },
        picture: {
            type: String,
            require: true,
        },
    }
);

const UserModel = mongoose.model(
    "User", UserSchema
);

module.exports = UserModel;