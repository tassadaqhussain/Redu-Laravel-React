import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import ProductList from '../components/Product';
import ProductDetails from '../components/ProductDetail'
const About = () => (
    <div>
        <h3>Products </h3>
        <ProductList />
        <h5>Detail Producst</h5>
        <ProductDetails/>
    </div>
);

export default About;