import express from "express";
import { MongoClient } from "mongodb";
import morgan from 'morgan';
import cors from 'cors';
import productRouter from './products/router';
import main from './connect'

const app = express();

main()

app.use(express.json());
// app.use(cors());
// app.use(morgan('dev'));


// import usersRouter from './router/router.users.js';
app.use('/api/products', productRouter);
// app.use('/api/users/', usersRouter)



const PORT = 8181;
app.listen(PORT, () => console.log(`server run in port ${PORT}!`));