import React from 'react';
import Products from '../Products/Products';
import Totalproduct from '../Totalproduct/Totalproduct';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Totalproduct></Totalproduct>
        </div>
    );
};

export default Home;