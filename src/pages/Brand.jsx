import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/brand.svg';

const Brand = () => {
    return (
        <Link to="/">
            <img src={brand} alt="Tienda aizastore" title="Tienda aizastore" />
        </Link>
    );
};

export default Brand;