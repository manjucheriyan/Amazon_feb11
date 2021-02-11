var express = require('express');
var router = express.Router();
var productServices = require('../services/productServices');


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

router.post('/createProduct',function(req,res){
  console.log("productRouter - createProduct"); 
 let productName=req.body.productName;
 let productPrice=req.body.productPrice;
 let productCategory=req.body.productCategory;
 let productCount=req.body.productCount;
 productServices.createNewProduct(productName,productPrice,productCategory,productCount)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message});
  }) 
})

router.post('/getAllProductsByCategory', function(req, res) {
  console.log("productRouter - getAllProductsByCategory"); 
  let productCategory=req.body.productCategory;
  productServices.getAllProductsByCategory(productCategory)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,productsArray:data.productsArray});
  });
});



router.post('/getProductDetails', function(req, res) {
  console.log("productRouter - getProductDetails"); 
  let productName=req.body.productName;
  productServices.getProductDetails(productName)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,productObject:data.productObject});
  });
});



module.exports = router;