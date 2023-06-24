import React, { useState } from 'react'
import "./about.css";
import profile from "./assets/profile.JPG";

const About = () => {
    const [box, setBox] = useState("abBar_skills");

    const handleAbBoxChange = (e) => {
        setBox(e.target.id);
    };

    return (
        <section className="about" id='about'>
            <div className="abProfile">
                <figure className='abProfile_fig'>
                    <img src={profile} alt="Profile pic" className='abProfile_img' width="1740" height="2012" />
                    <figcaption className='abProfile_cap'></figcaption>
                </figure>
            </div>
            <div className="abInfo">
                <h2 className='abInfo_head'>About Me</h2>
                <p className='abInfo_desc'>
                    I am an enthusiastic and dedicated web developer with a strong passion
                    for creating engaging and user-friendly websites. As a fresher in the
                    field of web development, I am eager to apply the knowledge and skills
                    I have acquired through my education and personal projects to
                    contribute to the success of a dynamic organization.
                </p>
                <div className="abBar">
                    <h3 className={box === "abBar_skills" ? "abBar_head abBar_active" : "abBar_head"} onClick={handleAbBoxChange} id='abBar_skills'>Skills</h3>
                    {/* <h3 className={box === "abBar_exp" ? "abBar_head abBar_active" : "abBar_head"} onClick={handleAbBoxChange} id='abBar_exp'>Experience</h3>
                    <h3 className={box === "abBar_edu" ? "abBar_head abBar_active" : "abBar_head"} onClick={handleAbBoxChange} id='abBar_edu'>Education</h3> */}
                </div>
                <div className={box === "abBar_skills" ? "abBox" : "abBox abBox_hidden"} id="abBox_skills">
                    <ul className='abBox_ul'>
                        <li className='abBox_li'>Nodejs</li>
                        <li className='abBox_li'>React</li>
                        <li className='abBox_li'>MongoDB</li>
                        <li className='abBox_li'>Express</li>
                        <li className='abBox_li'>Javascript</li>
                        <li className='abBox_li'>C++</li>
                    </ul>
                </div>
                {/* <div className={box === "abBar_exp" ? "abBox" : "abBox abBox_hidden"} id='abBox_exp'>
                    <ul className='abBox_ul'>
                        <li className='abBox_li'>HTML</li>
                        <li className='abBox_li'>CSS</li>
                        <li className='abBox_li'>Javascript</li>
                        <li className='abBox_li'>React JS</li>
                        <li className='abBox_li'>C++</li>
                        <li className='abBox_li'>DSA</li>
                    </ul>
                </div>
                <div className={box === "abBar_edu" ? "abBox" : "abBox abBox_hidden"} id='abBox_edu'>
                    <ul className='abBox_ul'>
                        <li className='abBox_li'>HTML</li>
                        <li className='abBox_li'>CSS</li>
                        <li className='abBox_li'>Javascript</li>
                        <li className='abBox_li'>React JS</li>
                        <li className='abBox_li'>C++</li>
                        <li className='abBox_li'>DSA</li>
                    </ul>
                </div> */}
            </div>
        </section>
    )

}

export default About