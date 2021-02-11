var express = require('express');
var router = express.Router();
var userServices = require('../services/userServices');


function authMiddleware(req,res,next){
  console.log("Inside authMiddleware");
  if(req.session.currentUser){
    next();
  }
  else{    
    res.staus(401).send({message:"Please login"});
  }
}
/* GET users listing. */

router.get('/', function(req, res) {
  BackendUserController.getUsers()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,users:data.users});
  });
});



router.post('/login',function(req, res) {
  console.log("In Login Routerry");
  let email=req.body.email;  
  userServices.login(email)
  .then(data=>{
    if(data.statusCode==200){
      req.session.currentUser=email;
    }
    res.status(data.statusCode).send({
      message:data.message,
      record:data.record});
  }) 
  
});



router.post('/getUserDetails',function(req, res) {
  console.log("userRouter - /getUserDetails");
  let email=req.body.email;  
  userServices.getUserDetails(email)
  .then(data=>{
    if(data.statusCode==200){
      responseStatus="Pass"
    }
    else{
      responseStatus="Fail"
    }
    console.log(responseStatus)
    console.log(data.userObj.email)
    res.status(data.statusCode).send({
      message:responseStatus,
      userObj:data.userObj});
  }) 
  
});


router.post('/addCartDetails',function(req, res) {
    console.log("userRouter - addCartDetails");
    let productObject=req.body.productObject; 
    let email=req.body.email;
    userServices.addCartDetails(productObject,email )
    .then(data=>{
      if(data.statusCode==200){
        responseStatus="Pass"
      }
      else{
        responseStatus="Fail"
      }
      res.status(data.statusCode).send({
        message:responseStatus,
        cartCount:data.cartCount});
    })  
});


router.post('/emptyCart',function(req, res) {
  console.log("userRouter - emptyCart");
  let email=req.body.email;
  userServices.emptyCart(email)
  .then(data=>{
    if(data.statusCode==200){
      responseStatus="Pass"
    }
    else{
      responseStatus="Fail"
    }
    res.status(data.statusCode).send({
      message:responseStatus,
      cartCount:data.cartCount});
  })  
});


module.exports = router;