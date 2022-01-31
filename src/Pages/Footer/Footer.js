import React from 'react';
import './Footer.css';
import pic1 from '../../images/icon/Vector.png';
import pic2 from '../../images/icon/Vector-1.png';
import pic3 from '../../images/icon/Vector-2.png';
import pic4 from '../../images/icon/Vector-3.png';

const Footer = () => {
    return (
            <div className="footer bg-black">
            <h2 
            className="text-center text-light pt-5 pb-5 mt-5"
            >Health Care</h2>
            <div className="mt-5 pt-5 pb-5">
            <img src={pic1} alt=""/>
            <img src={pic2} alt=""/>
            <img src={pic3} alt=""/>
            <img src={pic4} alt=""/>
            </div>
        </div>

    );
};

export default Footer;