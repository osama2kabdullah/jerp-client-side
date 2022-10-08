import React from 'react';
import Bannar from './Bannar';
import Header from './header/Header';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <div className='bannar-image'>
            <Header></Header>
            <Bannar></Bannar>
            </div>
            <Tools></Tools>
        </div>
    );
};

export default Home;