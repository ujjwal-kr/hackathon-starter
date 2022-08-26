import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const UserController = {
  getUsers: async () => {
    try {
      let users = await User.find({})
      return users
    } catch (e) {
      throw Error(e)
    }
  },

  createUser: async (body, callback) => {
    let { email, name, password } = body;
    const user = await User.findOne({email})
    if (user) throw Error("User Already exists")

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err
        let newUser = await User.create({ name, email, password: hash })
       callback(newUser)
      })
    })
  },
};

export default UserController;
