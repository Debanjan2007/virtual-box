import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkUid: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        unique: false,
        required: [true || "Name is a required field"]
    },
    lastname: {
        type: String,
        unique: false,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: [true || "Email is a required"],
        unique: true
    },
    isLogedin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


const User = mongoose.models.User || mongoose.model('User', UserSchema);

export {
    User
}