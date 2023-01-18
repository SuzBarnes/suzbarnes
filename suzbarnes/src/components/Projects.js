import React from "react";
import "../styling/projects.css";

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                <li><a href="https://suzbarnes.github.io/virtual-pet">Virtual Pet</a></li>
                <img src={require('../images/virtual-pet.png')} alt="" />
                <li><a href="https://suzbarnes.github.io/cruise-ships">Cruise Ships GUI</a></li>
                <img src={require('../images/cruise-ships.png')} alt="" />
                <li><a href="https://suzbarnes.github.io/weather-app">Weather App</a></li>
                <img src={require('../images/weather-app.png')} alt="" />
                <li><a href="https://youtu.be/CUrmqMA-IB0">Santa Draws</a> - Watch the presentation</li>
                <img src={require('../images/SantaDraws.png')} alt="" />
                <li><a href="https://github.com/SuzBarnes/music-library">Music Library Repo</a></li>
                <li><a href="https://github.com/SuzBarnes/book-library">Book Library Repo</a></li>
            </ul>
        </div>
    );
};

export default Projects;
