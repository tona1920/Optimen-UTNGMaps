const router = require('express').Router();
const  auth  = require ('../helpers/auth');

router.get('/home',auth.isAuthenticated,(req,res)=>{
    res.render('users/home');
});

router.get('/users/rutas',auth.isAuthenticated,(req,res)=>{
    res.render('rutas');
});

module.exports = router;