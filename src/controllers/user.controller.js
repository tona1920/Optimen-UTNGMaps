const User = require('../models/User');
const passport = require('passport');
const { body, validationResult } = require('express-validator');

exports.renderUsers = async (req, res) => {
    const users = await User.find({}).lean()
    res.render("users/usuarios", { users });
}

exports.renderSignUpForm = (req, res) => {
    let vali = []
    res.render("users/signup", { vali })
};

exports.renderSigninForm = (req, res) => res.render("users/signin");

exports.signin = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/users/signin",
    failureFlash: true,
});

exports.singup = async (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    let vali = [];
    if (name.length < 6) {
        vali.push({ msg: "El nombre es muy corto." });
        res.render('users/signup', { vali, name, email });
        return;
    }
    if (password.length < 6 || confirm_password.length<6) {
        vali.push({ msg: "La contraseña es muy corta." });
        res.render('users/signup', { vali, name, email });
        return;
    }

    body('name', 'Usuario es requerido').trim().isLength({ min: 6, max: 15 }).escape(),
    body('email', 'Email es requerido').trim().isEmail().escape().normalizeEmail(),
    body('password', 'Contraseña es requerida').trim().isLength({ min: 6, max: 15 }).escape(),
    body('confirm_password', 'Contraseña es requerida').trim().isLength({ min: 6, max: 15 }).escape(),
    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            vali = errors.array();
            res.render('users/signup', { vali, name, email });
            return;
        } else {
            if (password != confirm_password) {
                vali.push({ msg: "Las contraseñas no coinciden." });
                res.render('users/signup', { vali, name, email });
                return;
            }
        }
    }
    console.log('Registrando Usuario');
    const emailUser = await User.findOne({ email: email });
    console.log(emailUser);

    if (emailUser) {
        vali.push({ msg: "The Email is already in use." });
        res.render('users/signup', { vali, name, email });

        return;
    } else {
        // Saving a New User
        const newUser = await new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "You are registered.");
        res.redirect("/users/signin");
    }
};

exports.renderPerfil = (req, res) => {
    res.render("users/perfil")
};

exports.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    req.logout();
    req.flash("success_msg", "Tu cuenta a sido eliminada.");
    res.redirect("/users/signin");
};

exports.delete= async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "El usuario a sido eliminado.");
    res.redirect("/users");
};

exports.updateUser = async (req, res) => {
    const { pass, confirm_pass} = req.body;
    
    if(pass.length<6 || confirm_pass<6){
        req.flash("error_msg", "Las contraseñas son muy cortas");
        res.redirect("/users/perfil");
        return;
    }

    if (pass != confirm_pass) {
        req.flash("error_msg", "Las contraseñas no coinciden");
        res.redirect("/users/perfil");
        return;
    }
    if (pass.length >= 6) {
        const newUser = new User();
        const password = await newUser.encryptPassword(pass);
        await User.findByIdAndUpdate(req.params.id, { password });
        req.flash("success_msg", "La contraseña se actualizo correctamente");
        res.redirect("/users/perfil");
    }
    
};

exports.renderUpdateForm = async(req,res)=>{
    const { id } = req.params;
    let vali = []
    const users = await User.findById(id);
    res.render('users/updateUser',{users, vali });
};

exports.updateUsers = async (req, res) => {
    const { id } = req.params;
    const {name, admin,email, pass, confirm_pass} = req.body;
    const users = await User.findById(id);

    if (name.length < 6) {
        vali.push({ msg: "El nombre es muy corto." });
        res.render('users/updateUser',{users, vali });
        return;
    }

    if (email.length < 6) {
        vali.push({ msg: "El email es muy corto." });
        res.render('users/updateUser',{users, vali });
        return;
    }

     if (pass.length >= 6) {
        if (pass != confirm_pass) {
            req.flash("error_msg", "Las contraseñas no coinciden");
            res.render('users/updateUser',{users, vali })
            return;
        }
        const newUser = new User();
        const password = await newUser.encryptPassword(pass);
        await User.findByIdAndUpdate(req.params.id, { password, admin, email, name });
        req.flash("success_msg", "La contraseña se actualizo correctamente");
        res.redirect("/users");
    }

    if (pass.length < 6) {
        await User.findByIdAndUpdate(req.params.id, { admin, email, name });
        req.flash("success_msg", "La contraseña se actualizo correctamente");
        res.redirect("/users");
    }
    
};

exports.createUser = (req, res) => {
    let vali = []
    res.render("users/createUser", { vali })
};

exports.createNewUser = async (req, res) => {
    const { name, email, password, confirm_password, admin } = req.body;
    let vali = [];
    if (name.length < 6) {
        vali.push({ msg: "El nombre es muy corto." });
        res.render('users/createUser', { vali, name, email });
        return;
    }
    if (password.length < 6 || confirm_password.length<6) {
        vali.push({ msg: "La contraseña es muy corta." });
        res.render('users/createUser', { vali, name, email });
        return;
    }

    body('name', 'Usuario es requerido').trim().isLength({ min: 6, max: 15 }).escape(),
    body('email', 'Email es requerido').trim().isEmail().escape().normalizeEmail(),
    body('password', 'Contraseña es requerida').trim().isLength({ min: 6, max: 15 }).escape(),
    body('confirm_password', 'Contraseña es requerida').trim().isLength({ min: 6, max: 15 }).escape(),
    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            vali = errors.array();
            res.render('users/createUser', { vali, name, email });
            return;
        } else {
            if (password != confirm_password) {
                vali.push({ msg: "Las contraseñas no coinciden." });
                res.render('users/createUser', { vali, name, email });
                return;
            }
        }
    }
    console.log('Registrando Usuario');
    const emailUser = await User.findOne({ email: email });
    console.log(emailUser);

    if (emailUser) {
        vali.push({ msg: "The Email is already in use." });
        res.render('users/createUser', { vali, name, email });

        return;
    } else {
        // Saving a New User
        const newUser = await new User({ name, email, password, admin });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "You are registered.");
        res.redirect("/users");
    }
};