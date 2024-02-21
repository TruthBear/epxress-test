import mongoose from "mongoose";

mongoose.connect(`${process.env.DB_URL}/yj4-express`);
// mongoose.connect(`mongodb://localhost:27017/yj4-express`);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected on DB"));
