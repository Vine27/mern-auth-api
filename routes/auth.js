const express = require("express");
const { signup, 
    accountActivation, 
    signin, 
    resetPassword, 
    forgotPassword,
    googleLogin,
    facebookLogin
} = require("../controllers/auth");
const router = express.Router();


//import validators
const {userSignupValidator,resetPasswordValidator, userSigninValidator, forgotPasswordValidator} = require("../validators/auth");
const {runValidation} = require("../validators/index")

router.post('/signup', userSignupValidator, runValidation ,signup);
router.post('/acount-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation ,signin);
//forgot reset password
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

// google and facebook
router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);


module.exports = router;