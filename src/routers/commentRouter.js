import express from "express"
import CommentObj from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.get('/', CommentObj.list);
commentRouter.post('/write', CommentObj.write);

export default commentRouter;