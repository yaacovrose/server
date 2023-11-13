import express from "express";
import usersController from "../controllers/usersControllers";

const usersRouter = express.Router(); 

usersRouter.get("/:email", usersController.getUserByEmail);

usersRouter.post("/", usersController.userRegistration);

export default usersRouter;
