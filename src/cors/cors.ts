import cors, { CorsOptions } from "cors";

const whiteList = [
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  "http://localhost:8181"
];

const corsOptions: CorsOptions = {
  origin: whiteList,
};

const corsHandler = cors(corsOptions);

export default corsHandler;
