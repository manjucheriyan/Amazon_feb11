import React from 'react';
import { withRouter } from 'react-router';
import {Link} from "react-router-dom"
import './App.css'
import amazon_logo from './images/amazon_logo.png';
import swal from 'sweetalert';
import ProductController from './ProductController';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


class Navbar extends React.Component {
    state = {
      selectValue: "NA"
    }

    handleChange = (event) => { 
        let productCategory =event.target.value      
        this.setState({selectValue:productCategory});

          
        ProductController.getAllProductsByCategory(productCategory)
            .then(response=>{
                let productsArray=[]
                productsArray=response.data.productsArray
                let productNames=""
                for (var i = 0; i < productsArray.length; i++) {
                    productNames =productNames + productsArray[i].productName +";"
                }
                swal(productNames)
            })
            .catch(error=>{
                console.log(error)
                swal("Product Search failed","Failed to retrieve product Details","error");
            })
    }


    render() {
        return ( 
        <div>
            <nav className="header">
        {/* logo on the left -> img */}
        <Link to="/">
            <img className="header__logo" src={amazon_logo} alt="amazon logo"/>
        </Link>
        <div className="header__address">
            <Link to='' className="header__link">
                <div onClick="" className="header__option">
                    <span className="header__optionLineOne"><h5>Hello {this.props.name}</h5>Select your address</span>
                    <span className="header__optionLineTwo"></span>
                </div>
            </Link>
        </div>
        {/* search box */}
        <div className="header__search" id="styled-select" >
        
                        <select id="selectDropdown"
                            value={this.state.selectValue} 
                            onChange={this.handleChange} id="group"
                        >
                            <option value="NA">All</option>
                            <option value="AmazonDevices">Amazon Devices</option>
                            <option value="AmazonPantry">AmazonPantry</option>
                            <option value="Baby">Baby</option>
                            <option value="Books">Books</option>
                            <option value="Furniture">Furniture</option>
                            <option value="ClothingandAccessories">Clothing and Accessories</option>
                            <option value="Beauty">Beauty</option>
                            <option value="KitchenAppliances">Kitchen Appliances</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Car&Motorbikes">Car & Motorbikes</option>
                            <option value="GiftCards">Gift cards</option>
                        </select>
                                       
                                    
            
            <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
            
        </div>
        {/* 3 links */}
        <div className="header__nav">
            <Link to='/login' className="header__link">
                <div onClick="" className="header__option">
                    <span className="header__optionLineOne">Hello,Sign in</span>
                    
                    
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to="" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">cart</span>
                </div>
            </Link>
        </div>
        <div className="header__nav">
            <Link to={{ 
                                                        pathname: "/placeOrder",
                                                        userObj:this.state.userObj,
                                                        productObj: this.state.productObj
                                                        }}            
            className="header__link">
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{this.props.productCountInCart}</span>
                </div>
            </Link>
        </div>
        
    </nav>
   </div>
        );
    }
}

export default withRouter(Navbar) ;




