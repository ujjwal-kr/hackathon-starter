import User from "../models/user.model.js";

const UserController = {
  getUsers: async () => {
    try {
      let users = await User.find({})
      return users
    } catch (e) {
      throw Error(e)
    }
  },

  // getUserByMail: (mail) => {
  //   let user = Users.filter((user) => user.email == mail);
  //   return user;
  // },

  createUser: async (body) => {
      let user = new User({
        name: body.name,
        age: body.age,
        email: body.email
      })

      try {
       await user.save()
       return user
      } catch (e) {
        throw Error(e)
      }
  },
};

export default UserController;
