import usersService from "../services/usersApiService";
import { Request, Response } from "express";
import { UsersInterface } from "../../interface";
import userValidation from "../joi/validation";


const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const email: string = req.params.email;
    console.log(email);
    const user = await usersService.getUser(email);
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
  getUserByEmail,
  userRegistration
}

export default usersController 

