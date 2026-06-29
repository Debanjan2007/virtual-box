import { Schema , model } from "mongoose";

const UserSchema = new Schema({
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


export const User = model("User" , UserSchema)