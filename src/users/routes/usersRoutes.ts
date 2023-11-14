import express from "express";
import usersController from "../controllers/usersControllers";

const usersRouter = express.Router(); 

usersRouter.get("/login", usersController.login);

usersRouter.post("/", usersController.userRegistration);

export default usersRouter;
