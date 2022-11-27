import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
   id: {type: String},
    login: {type: String},
    senha: {type: String},
   }
);

const user = mongoose.model('user', userSchema);

export default user;

