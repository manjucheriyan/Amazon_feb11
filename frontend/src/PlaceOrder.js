import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import FrontEndController from './FrontEndController';
import swal from 'sweetalert';

class PlaceOrder extends React.Component {
  
    
        state = {
            cartItems: "",
            cartCount:"",            
          }

        constructor(){
            super()
          let email="manjucheriyan98@gmail.com"
        FrontEndController.getUserDetails(email)
        .then(response=>{
            this.setState({
                cartItems: response.data.userObj.cartItems
              });
        })
        .catch(error=>{
            alert(error)
            alert("Cart Search failed");
        })

      }
  
      makePayment(){
        
        let email="manjucheriyan98@gmail.com"
        //let email=this.props.location.userDetails.email
        FrontEndController.emptyCart(email)
            .then(response=>{
                let cartCount=response.data.cartCount;
                this.setState({
                    cartCount: cartCount
            });
                alert("Order Payment Completed Successfully")
                this.props.history.push({
                  pathname:"/userHome",
                  userDetails:"",
                  });
            })
            .catch(error=>{
                swal("Product Failed to add in cart")
            })
        }


    
 render() {
    return (             
            <div>
                <Navbar name={""} productCountInCart ={this.state.cartCount}/>
                <div>
                    <h1>Place Order</h1>    
                </div>
                <div>
                {this.state.cartItems}
                </div>           
                <button type="submit" id="makePayment" className="btn btn-primary" onClick={this.makePayment.bind(this)}> Make Payment</button>
                <Link to={{ 
                
                    }}>
                </Link>

            </div>

  

);
}
}


export default withRouter(PlaceOrder) ;




