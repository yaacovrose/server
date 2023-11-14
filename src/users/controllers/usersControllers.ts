import usersService from "../services/usersApiService";
import { Request, Response } from "express";
import { UsersInterface, UserValid } from "../../interface";


const login = async (req: Request, res: Response) => {
  try {
    const userFromClient: UserValid = req.body;
    console.log(userFromClient);
    const user = await usersService.getUser(userFromClient);
    return res.send(user);
  } catch (error) {
    throw error
  }
};

const userRegistration = async (req: Request, res: Response) => {
  try {
    const user: UsersInterface = req.body;
    const userFromDB = await usersService.register(user);
    return res.status(201).send(userFromDB);
  } catch (error) {
    return error
  }
};

const usersController = {
  login,
  userRegistration
}

export default usersController 

