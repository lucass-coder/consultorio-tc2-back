import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucas:123@cluster0.hdu0rth.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;