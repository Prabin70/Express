import mongoose from "mongoose";
import userSchema from "./userSchema.js";

export const User = mongoose.model("User", userSchema);
