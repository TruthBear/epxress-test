import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  gameId: Number,
  user: String,
  comment: String,
  createdAt: Date,
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;