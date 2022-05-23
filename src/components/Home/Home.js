import React from 'react';
import Products from '../Products/Products';
import Totalproduct from '../Totalproduct/Totalproduct';
import Banner from './Banner';
import HomePageProducts from '../Products/HomePageProducts';
import ImmediateRestock from '../ImmediateRestock/ImmediateRestock';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Totalproduct></Totalproduct>
            <ImmediateRestock></ImmediateRestock>
            <HomePageProducts></HomePageProducts>

        </div>
    );
};

export default Home;