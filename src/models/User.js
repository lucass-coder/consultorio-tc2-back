import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
   id: {type: String},
    login: {type: String},
    senha: {type: String},
   }
);

const users = mongoose.model('users', userSchema);

export default users;

