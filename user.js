const express=require('express');
const { registerUser, loginUser, logoutUser, getUser, getAllUser, updateUser } = require('../Controllers/userControler');
const { isAuthenticateUser, autherizeRoles } = require('../middleware/authenticate');
const router=express.Router();
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/myprofile').get(isAuthenticateUser,getUser)


router.route('/admin/users').get(isAuthenticateUser,autherizeRoles('admin'),getAllUser)
router.route('/admin/user/:id').get(isAuthenticateUser,autherizeRoles('admin'),getUser)
                              .put(isAuthenticateUser,autherizeRoles('admin'),updateUser)

module.exports=router;