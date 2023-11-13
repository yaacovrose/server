import cors, { CorsOptions } from "cors";

const whiteList = ["http://localhost:8181"];

const corsOptions: CorsOptions = {
  origin: whiteList,
};

const corsHandler = cors(corsOptions);

export default corsHandler;
