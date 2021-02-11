import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import ProductController from './ProductController';

class UserHomeCopy extends React.Component {
  
    state = {
        selectValue: "NA",
        productNames:"",
        productPrice:"",
        productCategory:"",
        productCount:"",
        productsArray:[],
        userObj:this.props.location.userObj
      }
  
      handleChange = (event) => { 
          let productCategory =event.target.value      
          this.setState({selectValue:productCategory});
  
          ProductController.getAllProductsByCategory(productCategory)
              .then(response=>{
                  let productsArray=[]
                  productsArray=response.data.productsArray;

                  this.setState({productsArray:productsArray});

              })
              .catch(error=>{
                  console.log(error)
                  alert("Product Search failed","Failed to retrieve product Details","error");
              })
            }
  
    
    render() {
        return (             
        <div>
            <Navbar name={this.state.userObj.Name} productCountInCart ={""}/>
            <div>
                <h1>UserHome</h1>
            </div>
<div>{this.state.userObj.Name}'s Shopping Items Display</div>

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
                                        
                                       
<div>
<table class="table">
                                        <tr>
                                            <th>productName</th>                                            
                                            <th>productPrice</th>
                                            <th>productCategory</th>
                                            <th>productCount</th>
                                            <th>Link</th>
                                            
                                                                                       
                                        </tr>                
                                       
                                        {
                                                this.state.productsArray.map(product=>
                                                <tr>                                                    
                                                    <td><Link to={{ 
                                                        pathname: "/product",
                                                        userObj:this.state.userObj.Name,
                                                        productObj: product
                                                        }}>{product.productName}</Link></td>  
                                                    <td>{product.productPrice}</td>                                                     
                                                   <td>{product.productCategory}</td>
                                                    <td>{product.productCount}</td>
                                                    
                                               
                                                </tr>)

                                            }                                  
                                    </table> 
</div>

        </div>

      
   
        );
    }
}

export default withRouter(UserHomeCopy) ;




