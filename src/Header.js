import React, { useState } from 'react';
// import { MdDarkMode } from "react-icons/md";
// import { BsSun } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";

const Header = () => {
    // const [theme, setTheme] = useState("darkMode");

    // const handleThemeChange = (e) => {
    //     setTheme(e.currentTarget.className.baseVal);
    //     console.log(theme);
    // }

    const [menu, setMenu] = useState("close");

    const handleMenuChange = (e) => {
        setMenu(menu === "close" ? "open" : "close");
    }

    return (
        <header>
            <h1 className='header_h1'><a href="#home" className='header_a'>Gokul</a></h1>
            <div className='navigation'>
                <nav className='hrNav'>
                    <ul className='hrNav_ul'>
                        <li className='hrNav_li'><a href="#home" className='hrNav_a'>Home</a></li>
                        <li className='hrNav_li'><a href="#about" className='hrNav_a'>About</a></li>
                        {/* <li className='hrNav_li'><a to="/services" className='hrNav_a'>Services</a></li> */}
                        <li className='hrNav_li'><a href="#work" className='hrNav_a'>Work</a></li>
                        <li className='hrNav_li'><a href="#contact" className='hrNav_a'>Contact</a></li>
                    </ul>
                </nav>
                {/* <MdDarkMode className={theme === "darkMode" ? "modeHidden" : "darkMode"} onClick={handleThemeChange} />
                <BsSun className={theme === "lightMode" ? "modeHidden" : "lightMode"} onClick={handleThemeChange} /> */}
                <FiMenu className={menu === "close" ? 'mobOpen' : "ocHidden"} onClick={handleMenuChange} />
                <AiOutlineClose className={menu === "open" ? "mobClose" : "ocHidden"} onClick={handleMenuChange} />
                <nav className={menu === "open" ? "vrNav" : "vrNav_hidden"}>
                    <ul className='vrNav_ul'>
                        <li className='vrNav_li'><a href="#home" className='vrNav_a'>Home</a></li>
                        <li className='vrNav_li'><a href="#about" className='vrNav_a'>About</a></li>
                        {/* <li className='vrNav_li'><a href="#services" className='vrNav_a'>Services</a></li> */}
                        <li className='vrNav_li'><a href="#work" className='vrNav_a'>Work</a></li>
                        <li className='vrNav_li'><a href="#contact" className='vrNav_a'>Contact</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header