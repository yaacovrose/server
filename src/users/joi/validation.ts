import Joi from "joi";
import { UserValid } from "../../interface";

const userValidation = (user:UserValid) => {
  const schema = Joi.object({
    _id: Joi.string().allow(""),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,70})/
      )
      .rule({
        message:
          'user "password" must be at least 7 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
      })
      .required(),
  });
  return schema.validate(user);
};

export default userValidation;