const mongoose=require('mongoose');

const User = mongoose.model('User',{
    Name:String,
    password:String,
    mobileNo:Number,
    email:String,
    cartProductCount:Number,
    cartItems:String    
})
module.exports ={
    User
}

