import React from 'react'
import "./style.css";
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Work from './Work';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Work />
            <Contact />
        </>

    )
}

export default App