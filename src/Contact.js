import React from 'react';
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contactLinks">
                <h2 className='contactLinks_h2'>Contact Me</h2>
                <div className="contactMail">
                    <GrMail />
                    <a href="mailto:bansalgokul134@gmail.com" className='contactMail_a'>bansalgokul134@gmail.com</a>
                </div>
                <div className="contactPhone">
                    <BsFillTelephoneFill />
                    <a href="tel:+918689054520" className='contactPhone_a'>+91-8689054520</a>
                </div>
                <div className="contactReferences">
                    <a href="https://github.com/bansalgokul" className='contactReferences_a'>
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/gokul-bansal-553429225/" className='contactReferences_a'>
                        <BsLinkedin />
                    </a>
                    <a href="https://twitter.com/GokulBansa56755" className='contactReferences_a'>
                        <BsTwitter />
                    </a>
                    <a href="https://www.instagram.com/gokul.bansal.75/" className='contactReferences_a'>
                        <BsInstagram />
                    </a>
                </div>
                <button className="contactLinks_resume">Download Resume</button>
            </div>
            <div className="contactForm">
                <form action="" method="post" className='contactForm_form'>
                    <label className="contactForm_label" htmlFor="name">
                        <input type="text" id="name" name="namme" placeholder="Your Name" className="contactForm_input" />
                    </label>
                    <label className="contactForm_label" htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="contactForm_input"
                        />
                    </label>
                    <label className="contactForm_label" htmlFor="message">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            cols={30}
                            rows={10}
                            defaultValue={""}
                            className="contactForm_input"
                        />
                    </label>
                    <button className="contactForm_submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact