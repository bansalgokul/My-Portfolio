import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [theme, setTheme] = useState("darkMode");

    const handleThemeChange = (e) => {
        setTheme(e.currentTarget.className.baseVal);
        console.log(theme);
    }

    const [menu, setMenu] = useState("close");

    const handleMenuChange = (e) => {
        setMenu(menu === "close" ? "open" : "close");
    }

    return (
        <header>
            <h1 className='header_h1'><a href="./" className='header_a'>Gokul</a></h1>
            <div className='navigation'>
                <nav className='hrNav'>
                    <ul className='hrNav_ul'>
                        <li className='hrNav_li'><Link to="/" className='hrNav_a'>Home</Link></li>
                        <li className='hrNav_li'><Link to="/about" className='hrNav_a'>About</Link></li>
                        <li className='hrNav_li'><Link to="/services" className='hrNav_a'>Services</Link></li>
                        <li className='hrNav_li'><Link to="/work" className='hrNav_a'>Work</Link></li>
                        <li className='hrNav_li'><Link to="/contact" className='hrNav_a'>Contact</Link></li>
                    </ul>
                </nav>
                <MdDarkMode className={theme === "darkMode" ? "modeHidden" : "darkMode"} onClick={handleThemeChange} />
                <BsSun className={theme === "lightMode" ? "modeHidden" : "lightMode"} onClick={handleThemeChange} />
                <FiMenu className={menu === "close" ? 'mobOpen' : "ocHidden"} onClick={handleMenuChange} />
                <AiOutlineClose className={menu === "open" ? "mobClose" : "ocHidden"} onClick={handleMenuChange} />
                <nav className={menu === "open" ? "vrNav" : "vrNav_hidden"}>
                    <ul className='vrNav_ul'>
                        <li className='vrNav_li'><Link to="/" className='vrNav_a'>Home</Link></li>
                        <li className='vrNav_li'><Link to="/about" className='vrNav_a'>About</Link></li>
                        <li className='vrNav_li'><Link to="/services" className='vrNav_a'>Services</Link></li>
                        <li className='vrNav_li'><Link to="/work" className='vrNav_a'>Work</Link></li>
                        <li className='vrNav_li'><Link to="/contact" className='vrNav_a'>Contact</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header