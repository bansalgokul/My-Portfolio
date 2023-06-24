import React from 'react';
import snews from "./assets/images/snews.png";
import snakeGame from "./assets/images/snake-game.png";
import introComponent from "./assets/images/introComponent.png";
import blogWebsite from "./assets/images/blogWebsite.png";
import "./work.css"

const projects = [
    {
        image: introComponent,
        title: "Intro Component with Signup Form using HTML CSS JS",
        desc: "In the project, I built a responsive sign-up form following the design provided by Frontend Mentor. Users can view the site on various devices and experience hover states for interactive elements. I implemented form validation using JavaScript.",
        github: "https://github.com/bansalgokul/Intro-component-with-sign-up-form/",
        live: "https://bansalgokul.github.io/Intro-component-with-sign-up-form/"
    },
    {
        image: blogWebsite,
        title: "Blog Website using MERN",
        desc: "This is a full-stack blog website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website allows users to read, create and edit blog posts. It was my first mern stack project and I learned a lot. I implemented JWT authentication in it.",
        github: "https://github.com/bansalgokul/Blog-Website",
        live: "blog-gokul.vercel.app/"
    },
    {
        image: snews,
        title: "News Blog Home Page using HTML CSS and JS",
        desc: "During this project, I honed my skills in grid and flexbox layouts, and practiced adding/removing CSS classes through JavaScript. Utilizing the BEM naming convention reduced complexity. Designing the navigation bar was an enlightening experience, contributing to my future projects. ",
        github: "https://github.com/bansalgokul/news-component-main",
        live: "https://bansalgokul.github.io/news-component-main/"
    },
    {
        image: snakeGame,
        title: "Snake Game using Vanilla JS",
        desc: "This is a classic Snake Game built using vanilla JavaScript. The game allows players to control a snake and navigate it around the game board to eat food and grow longer. The objective is to achieve the highest score possible without colliding with the boundaries of the game board or the snake's own body.",
        github: "https://github.com/bansalgokul/Snake-Game-Vanilla-JS/",
        live: "https://bansalgokul.github.io/Snake-Game-Vanilla-JS/"
    },
]

const WorkCard = ({ project }) => (
    <div className="workCard">
        <div className="cardHeader">
            <img src={project.image} alt="" />
        </div>
        <div className="cardBody">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
        </div>
        <div className="cardFooter">
            <a href={project.github}>Github</a>
            <a href={project.live}>Live</a>
        </div>
    </div>
)

const Work = () => {
    return (
        <section className='work' id='work'>
            <h2>My Work</h2>
            <div className="project">

                {projects.map((project, index) => (
                    <WorkCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Work