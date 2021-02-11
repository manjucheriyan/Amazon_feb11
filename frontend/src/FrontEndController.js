import axios from 'axios';
const baseUrl = "http://localhost:4000";

class FrontEndController{

    static login(email){        
        return axios.post(baseUrl+"/users/login",{
            email
        }, { withCredentials:true })
    }

    static registration(Name,password,mobileNo,email){
        return axios.post(baseUrl+"/users/register",{
            
            Name,password,mobileNo,email
        })
    }

    static addCartDetails(productObject,email){
        return axios.post(baseUrl+"/users/addCartDetails",{
            productObject,email
        })
    }

    static emptyCart(email){
        return axios.post(baseUrl+"/users/emptyCart",{
            email
        })
    }

    static getUserDetails(email){
        return axios.post(baseUrl+"/users/getUserDetails",{
            email
        })
    }

    

    
    
    
}

export default FrontEndController;