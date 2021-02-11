const mongoose=require('mongoose');

const Product = mongoose.model('Product',{
    productName:String,
    productPrice:Number,
    productCategory:String,
    productCount:Number 
})

module.exports ={
    Product
}

