import express from "express";

const testRouter = express.Router();

testRouter.get('/', (req, res) => res.send({test: "테스트임"}));

export default testRouter;