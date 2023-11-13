import { UsersInterface } from "../../interface";
import { UsersModel } from "../../connectToDB";
import userValidation from "../models/joi/userValidation";

type UserResult = Promise<UsersInterface | Error | String>;

const getUser = async (email: string):UserResult => {
  try {
    const userFromDB = await UsersModel.findOne({ email: email })
    if (!userFromDB) throw new Error("user not in DB!");
    return userFromDB;
  } catch (error) {
    throw error;
  }
};

export const register = async (user: UsersInterface): UserResult => {
  try {
    const check = { email: user.email, password: user.password }
    const { error } = userValidation(check);
    
    if (error?.details[0].message) console.log(error?.details[0].message);
    if (error?.details[0].message) return new Error(error?.details[0].message);

    const newUser: UsersInterface = new UsersModel(user);
    newUser.save();
    return newUser;
  } catch (error) {
    return Promise.reject(error);
  }
};


const usersService = {
  getUser,
  register
}

export default usersService