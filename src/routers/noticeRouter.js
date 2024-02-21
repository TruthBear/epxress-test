import express from "express";
import { NoticeObj } from "../controllers/noticeConroller";

const noticeRouter = express.Router();

noticeRouter.get('/', NoticeObj.list);
noticeRouter.post('/write', NoticeObj.write);
noticeRouter.get('/:id', NoticeObj.detail);
noticeRouter.post('/:id/edit', NoticeObj.edit);
noticeRouter.post('/:id/delete', NoticeObj.delete);

export default noticeRouter;