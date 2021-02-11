import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';


class Product extends React.Component {
  
    state = {
        selectValue: "NA",
        productCount:0,
        productObj:this.props.location.productObj,
        userObj:this.props.location.userObj.Name
      }
  
      addToCart=()=>{

      FrontEndController.addCartDetails(this.state.productObj,this.state.userObj.email)
          .then(response=>{
            let newProductCount=response.data.cartCount;
            this.setState({
            productCount: newProductCount
          });
            swal("Product added to cart");
          })
          .catch(error=>{
            swal("Product Failed to add in cart")
          })
      }

    
    render() {
        return (             
                <div>
                <Navbar name={this.state.userObj.Name} productCountInCart ={this.state.productCount}/>
                        <div><h1>UserHome</h1>    </div>
        <div>{this.state.userObj.Name}'s Shopping Items Display</div>

<div>
    {this.state.productObj.productName}
</div>
<button type="submit" id="addToCart" className="btn btn-primary" onClick={this.addToCart}> Add item to cart</button>
 <Link to={{ 
      
        }}>
</Link>
  
 
 </div>

      
   
 );
}
}
export default withRouter(Product) ;




