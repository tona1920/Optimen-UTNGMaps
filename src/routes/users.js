const router = require('express').Router();
var controller = require('../controllers/user.controller');
const  auth  = require ('../helpers/auth');

//Signin
router.get("/users/signin", controller.renderSigninForm);

router.post("/users/signin", controller.signin);

//Singup
router.get("/users/signup", controller.renderSignUpForm);

router.post("/users/signup", controller.singup);

//Perfil
router.get("/users/perfil",auth.isAuthenticated,controller.renderPerfil);

//Logout
router.get("/users/logout", controller.logout);

//Get all users
router.get("/users", auth.isAuthenticated, controller.renderUsers);

//Delete user
router.delete("/users/delete/:id", auth.isAuthenticated, controller.deleteUser);

router.get('/delete/:id',auth.isAuthenticated, controller.delete);

//Update user
router.put("/users/edit-user/:id", auth.isAuthenticated, controller.updateUser);

//Update Users
router.get('/edit/:id',auth.isAuthenticated, controller.renderUpdateForm);

router.put("/users/edit/:id", auth.isAuthenticated, controller.updateUsers);

//Create user
router.get("/users/new-user", controller.createUser);

router.post("/users/new-user", controller.createNewUser);

module.exports = router;
