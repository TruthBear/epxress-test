import 'dotenv/config';
import './db'
import express from "express";
import morgan from "morgan";
import cors from "cors";
import appleRouter from './routers/appleRouter';
import testRouter from './routers/testRouter';
import noticeRouter from './routers/noticeRouter';

const corsOptions = {
  origin: [
    "http://localhost:5172",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
}
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send({name: "Choi"}));
app.use('/test', testRouter);
app.use('/apple', appleRouter);
app.use('/notice', noticeRouter);


app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
});