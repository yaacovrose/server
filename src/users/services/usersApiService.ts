import { UsersInterface, UserValid } from "../../interface";
import { UsersModel } from "../../connectToDB";
import userValidation from "../joi/validation";
import { comparePassword, generateUserPassword } from "../../bcrypt/hashPassword";
import { response } from "express";

type UserResult = Promise<UsersInterface | Error | String>;

const getUser = async (user: UserValid):UserResult => {
  try {
    const userInDB = await UsersModel.findOne({ email: user.email }).exec();
    console.log(userInDB)
    if (!userInDB) return "No user with this email in the database!";

    if (!comparePassword(user.password, userInDB.password))
      return "The email or password is incorrect!";

    return userInDB.userName;
  } catch (error) {
    return new Error;
  }
};

const register = async (user: UsersInterface): UserResult => {
  try {
    const check = { email: user.email, password: user.password }
    const { error } = userValidation(check);
    
    if (error?.details[0].message) console.log(error?.details[0].message);
    if (error?.details[0].message) return error?.details[0].message

    user.password = generateUserPassword(user.password);
    const newUser: UsersInterface = new UsersModel(user);
    newUser.save();
    return "The registration was successful";
  } catch (error) {
    return Promise.reject(error);
  }
};

const usersService = {
  getUser,
  register
}

export default usersService