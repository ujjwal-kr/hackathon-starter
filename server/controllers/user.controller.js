const UserController = {
  getUsers: () => {
    let users = [
      {
        name: "joe",
        age: 20,
        email: "joe@joe.com",
      },
      {
        name: 'Morgan',
        age: 21,
        email: "morgan@morgan.com"
      }
    ];

    return users
  },
};

export default UserController;
