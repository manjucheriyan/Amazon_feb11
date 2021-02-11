import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { withRouter } from 'react-router';
import './Home.css';

class AmazonCarousel extends Component {
    render() {
        return (
            <div>
            <Carousel>
                <div>
                    <img src="https://jpeg.org/images/jpeg-home.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://jpeg.org/images/jpeg-home.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default withRouter(AmazonCarousel) ;