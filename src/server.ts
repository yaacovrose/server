import express from "express";
import productRouter from './products/router';
import { connectToDatabase } from './connectToDB'
import cors from "./cors/cors";
import usersRouter from "./users/routes/usersRoutes";
import morgan from './serverLog/morgen';
import cartRouter from "./cart/cart.router";

const app = express();

connectToDatabase();

app.use(express.json());

app.use(cors)
app.use(morgan)

app.use('/api/products', productRouter);
app.use('/api/users', usersRouter);
app.use('/api/cart',cartRouter)


const PORT = 8181;
app.listen(PORT, () => console.log(`server run in port ${PORT}!`));