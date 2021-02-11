import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import AmazonCarousel from './AmazonCarousel';
import './Home.css';

class Home extends React.Component { 
    render() {
        return ( 
        <div>
            <Navbar name={""} productCountInCart ={""}/>
            <AmazonCarousel/>
        </div>
        );
    }
}

export default withRouter(Home) ;




