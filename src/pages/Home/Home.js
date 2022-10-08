import React from 'react';
import Bannar from './Bannar';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Header from './header/Header';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <div>
            <Bannar></Bannar>
            </div>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;