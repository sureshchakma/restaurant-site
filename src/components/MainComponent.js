import React from 'react';
import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';


const MainComponent = () => {
    return(
        <div>
        <h1>Hello world</h1>
        < Header/>
        < Body/>
        < Footer/>
        </div>
    );
}

export default MainComponent;