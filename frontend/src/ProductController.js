import axios from 'axios';
const baseUrl = "http://localhost:4000";

class ProductController{

    static getAllProductsByCategory(productCategory){ 
        return axios.post(baseUrl+"/products/getAllProductsByCategory",{
            productCategory
        }, { withCredentials:true })
    }

    static getProductDetails(productName){
        return axios.post(baseUrl+"/products/getProductDetails",{
            productName
        }, { withCredentials:true })
    }


    
    
}

export default ProductController;