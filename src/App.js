import React from 'react'
import "./style.css";
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
    return (
        <>

            <Header />
            <main>
                <Home />
                <About />
                <section>
                    <h2>My Work</h2>
                    <div>
                        <div />
                        <div />
                        <div />
                    </div>
                </section>
                <Contact />
            </main>
            <footer>
                <p />
            </footer>
        </>

    )
}

export default App