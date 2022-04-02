const User = require('../models/User');

exports.createAdminUser = async () => {
  const userFound = await User.find({});

  if (userFound.length == 0) {
    const newUser = new User({
      name: "Administrador",
      email: "admin@localhost.com",
      admin: true,
    });

    newUser.password = await newUser.encryptPassword("adminpassword");
    newUser.save();

  console.log("Admin user created");
  }
}