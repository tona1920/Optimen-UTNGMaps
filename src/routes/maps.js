const router = require('express').Router();
const  auth  = require ('../helpers/auth');

router.get('/home',auth.isAuthenticated,(req,res)=>{
    res.render('users/home');
});

router.get('/users/rutas',auth.isAuthenticated,(req,res)=>{
    res.render('rutas');
});

router.get('/users/modelo',auth.isAuthenticated,(req,res)=>{
    res.render('modelado3d');
});

module.exports = router;