const {Product}= require("../models/productModel");

function createNewProduct(productName,productPrice,productCategory,productCount){
    console.log("productServices - createNewProduct");
    return Product.findOne({
        productName
    })
    .then (product=>{
        if(product){
            return{
                statusCode:400,
                message:"product already exists"
            }
        }
        const newProduct= new Product({
            productName,
            productPrice,
            productCategory,
            productCount
        });
        newProduct.save();

        return {
            statusCode:200,
            message:"Product created successfully"
        }
    })
}

function getAllProductsByCategory(productCategory){
    return Product.find({"productCategory":productCategory}) 
    .then (productsArray=>{
            return{
                statusCode:200,
                productsArray:productsArray
            }
    })
}

function getProductDetails(productName){
    return Product.find({"productName":productName}) 
    .then (productObject=>{
            return{
                statusCode:200,
                productObject:productObject
            }
    })
}





module.exports={
    createNewProduct:createNewProduct,
    getAllProductsByCategory:getAllProductsByCategory,
    getProductDetails:getProductDetails
    }