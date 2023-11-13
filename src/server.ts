import express from "express";
import productRouter from './products/router';
import { connectToDatabase } from './connectToDB'
import cors from "cors";

const app = express();

connectToDatabase();

app.use(express.json());

app.use(cors())

app.use('/api/products', productRouter);


const PORT = 8181;
app.listen(PORT, () => console.log(`server run in port ${PORT}!`));