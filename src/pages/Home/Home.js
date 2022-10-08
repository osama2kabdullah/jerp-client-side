import React from 'react';
import Bannar from './Bannar';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Header from './header/Header';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;