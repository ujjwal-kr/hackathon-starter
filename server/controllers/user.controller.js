import Users from "../models/user.model.js";

const UserController = {
  getUsers: () => {
    let users = Users;
    return users;
  },

  getUserByMail: (mail) => {
    let user = Users.filter((user) => user.email == mail);
    return user;
  },

  createUser: (body) => {
    let { name, age, email } = body;
    let user = { name, age, email };
    Users.push(user);
    return user;
  },
};

export default UserController;
