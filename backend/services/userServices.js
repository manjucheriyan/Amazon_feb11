const {User}= require("../models/userModel");

let currentUser;


function getUsers(){
    return User.find({}) 
    .then (users=>{
            return{
                statusCode:200,
                users:users
            }
    })
}


function addUser(Name,password,mobileNo,email){
    return User.findOne({
        email
    })
    .then (user=>{
        if(user){
            return{
                statusCode:400,
                message:"Account already exists"
            }
        }
        const newUser= new User({
            Name,password,mobileNo,email
        });
        newUser.save();

        return {
            statusCode:200,
            message:"Account created successfully"
        }
    })
    //data[username]={username,password,acno,history:[],balance:0};
}

function getUserDetails(email){
    console.log('userServices - getUserDetails(email)');
    return User.findOne({
        email
    })
    .then (user=>{
        if(user){
            console.log("Hi"+user.email)
            return{
                statusCode:200,
                userObj:user,                
                message:"Successfully fetched user details"                
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentials"
        }
    });
}

function login(email){
    console.log('userServices - login(email)');
    console.log(email)
    return User.findOne({
        email
    })
    .then (user=>{
        if(user){
            let record1= user.Name
            console.log(record1)
            return{
                statusCode:200,
                record:user,                
                message:"Logged in successfully"
                
            }
        }
        return {
            statusCode:400,
            message:"Invalid credentials"
        }
    });
}




function emptyCart(email){
    console.log('userServices - emptyCart(email)');
    return User.findOne({
        email
    })
    .then (user=>{
        if(user){
            user.cartItems="";
            user.save();
            return{
                statusCode:200,
                cartCount:0,                    
                message:"Cart successfully emptied"                 
            }
        }
        return {
            statusCode:400,
            message:"Failed to empty the cart"
        }
    });
}


function addCartDetails(productObject,email){
    console.log('userServices - addCartDetails(productObject)');
    return User.findOne({
        email
    })
    .then (user=>{
        if(user){
            let productName= productObject.productName;
            console.log(productName);
            if(user.cartItems!=""){
                user.cartItems=user.cartItems+","; 
            }
            user.cartItems=user.cartItems+productName;
            user.save();

            let cartCount;

            var counter = 0;
            var sub = ",";
            var str = user.cartItems; 
            var array = [];
            var index = -1;

            do {
                index = str.indexOf(sub, index + 1);
                if (index != -1) {
                    array[counter++] = index;
                    i = index;
                }
            } while (index != -1);
            cartCount=counter+1;


            return{
                statusCode:200,
                cartCount:cartCount,                    
                message:"Cart successfully added for the user"                 
            }
        }
        return {
            statusCode:400,
            message:"Email address not available in database"
        }
    });
}


module.exports={
    getUsers:getUsers,
    addUser:addUser,
    login:login,
    addCartDetails:addCartDetails,
    getUserDetails:getUserDetails,
    emptyCart:emptyCart
    }