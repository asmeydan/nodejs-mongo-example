import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date()
    }
})

const User = mongoose.model("User", userSchema);

export default User;