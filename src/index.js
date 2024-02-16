import 'dotenv/config'
import express from "express";
import morgan from "morgan";
import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:5501", ]
}
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send({name: "Choi"}));
app.get('/apple', (req, res) => res.send({name: "grape"}));


app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
});