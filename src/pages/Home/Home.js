import React from 'react';
import Bannar from './Bannar';
import Header from './header/Header';

const Home = () => {
    return (
        <div>
            <div className='bannar-image'>
            <Header></Header>
            <Bannar></Bannar>
            </div>
            
        </div>
    );
};

export default Home;