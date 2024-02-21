import express from "express";
import { Notice } from "../controllers/noticeConroller";

const noticeRouter = express.Router();

noticeRouter.get('/', Notice.list);
noticeRouter.post('/write', Notice.write);
noticeRouter.get('/:id', Notice.detail);
noticeRouter.post('/:id/edit', Notice.edit);
noticeRouter.post('/:id/delete', Notice.delete);

export default noticeRouter;