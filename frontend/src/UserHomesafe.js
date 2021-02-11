import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import ProductController from './ProductController';

class UserHome extends React.Component {
  
    state = {
        selectValue: "NA",
        productNames:"",
        productPrice:""
      }
  
      handleChange = (event) => { 
          let productCategory =event.target.value      
          this.setState({selectValue:productCategory});
  
            alert(productCategory);
          ProductController.getAllProductsByCategory(productCategory)
              .then(response=>{
                  let productsArray=[]
                  productsArray=response.data.productsArray;
                 
                  let productNames="";
                  let productPrice=""
                  for (var i = 0; i < productsArray.length; i++) {
                      productNames =productNames + productsArray[i].productName +";"
                      productPrice =productPrice + productsArray[i].productPrice +";"
                      
                      this.setState({productNames:productNames});
                      this.setState({productPrice:productPrice});
                     // return(productNames);
                  }
                  
              })
              .catch(error=>{
                  console.log(error)
                  alert("Product Search failed","Failed to retrieve product Details","error");
              })
      }
  
    
    render() {
        return (             
        <div>
            <Navbar name={this.props.location.userDetails.Name} />
            <div>
                <h1>UserHome</h1>
            </div>
<div>{this.props.location.userDetails.Name}'s Shopping Items Display</div>

<select 
                                            value={this.state.selectValue} 
                                            onChange={this.handleChange} 
                                        >
                                            <option value="NA">All</option>
                                            <option value="AmazonDevices">Amazon Devices</option>
                                            <option value="AmazonPantry">AmazonPantry</option>
                                            <option value="Baby">Baby</option>
                                            <option value="Books">Books</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="ClothingandAccessories">Clothing and Accessories</option>
                                            <option value="Beauty">Beauty</option>
                                            <option value="Electronics">Electronics</option>
                                        </select>
                                        <div>{this.state.productNames}</div>
                                        <div>{this.state.productPrice}</div>
                                       


        </div>

      
   
        );
    }
}

export default withRouter(UserHome) ;




