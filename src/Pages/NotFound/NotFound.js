import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/services/page-404.png.webp'
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <br />
            <Link to="/">
                <button className="bg-warning">Go Back</button>
                </Link>
        </div>
    );
};

export default NotFound;