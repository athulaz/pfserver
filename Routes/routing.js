// const express=require('express')
// const userController=require('../Controllers/userController')

// const route=express.Router()

// // localhost:3000/reg
// route.post('/reg',userController.register)

// // localhost:3000/login
// route.post('/log',userController.login)

// module.exports=route



const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddle =require ('../Middlewares/jwtMiddleware')
const multerMiddle = require('../Middlewares/multerMiddleware')
const route=express.Router()


//localhost:3000/reg
route.post('/reg',userController.register)
route.post('/log',userController.login)
route.patch('/profile', jwtMiddle, multerMiddle.single('profile_pic'), userController.profileUpdate)

route.post('/addproject', jwtMiddle, multerMiddle.single('picture'), projectController.addProject)
route.get('/userprojects', jwtMiddle, projectController.getUserProjects)
route.get('/allprojects', projectController.getAllProjects)
route.delete('/deleteproject/:id', jwtMiddle, projectController.deleteproject)
route.put('/updateproject/:id', jwtMiddle,multerMiddle.single('picture'), projectController.updateproject)

module.exports=route

