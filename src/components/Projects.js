import React from "react";
//import "../styles/project.css";
import schdlr from "../assets/weekdayPlanner.png";
import burger from "../assets/EatABurger.png";
import weather from "../assets/weatherDash.png";
import fitness from "../assets/Fitapp.png";
import team from "../assets/teamprofile.png";
import suggestsocal from "../assets/SugSoCal.png";

let projects = [
    {
        title:"Scheduler",
        subtitle:"Schedule Your Day!",
        image:schdlr,
        site:"https://mitch-t.github.io/Workday-Planner/",
        live:"Live on GitHub Pages",
        github:"https://github.com/mitch-t/Workday-Planner.git",
        code:"GitHub Code",
        description: "A simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Moment.js library was used to work with date and time."
    },
    {
        title:"SuggestSoCal",
        subtitle:"Find something to do in SoCal",
        image:suggestsocal,
        site:"https://mitch-t.github.io/SuggestSoCalapp/",
        live:"Live on GitHub Pages",
        github:"https://github.com/mitch-t/SuggestSoCalapp.git",
        code:"GitHub Code",
        description: "An application that uses api calls to present a user with entertainment, dinning and shopping options in southern California"
    },
    {   
        title:"Weather",
        subtitle:"Check the Weather!",
        image:weather,
        site:"https://mitch-t.github.io/weatherdash/",
        live:"Live on GitHub Pages",
        github:"https://github.com/mitch-t/weatherdash.git",
        code:"GitHub Code",
        description: "A weather dashboard that runs in the browser, and features dynamically updated HTML and CSS. Uses OpenWeatherAPI."
    },
    {
        title:"Fitness",
        subtitle:"Track Your Fitness!",
        image:fitness,
        site:"https://blooming-oasis-51482.herokuapp.com/",
        live:"Live on Heroku",
        github:"https://github.com/mitch-t/StayFit.git",
        code:"GitHub Code",
        description: "A full-stack workout tracking application using Mongo database with Mongoose schema and Express routes. Allows a user to create, view, and track daily workouts. A user can log multiple exercises in a workout on a given day; with the ability to track the name, type, weight, sets, reps, and duration of exercise, with a cardio exercise the user can track distance traveled."
    },
    {
        title:"Team Profiles",
        image:team,
        github:"https://github.com/mitch-t/TeamGenerator.git",
        code:"GitHub Code",
        description: "A Node CLI that takes in information about employees and generates an HTML webpage that displays a team roster based on the information provided by the user. Uses inquirer npm package."
    },
    {
        title:"Burger",
        site:"https://shrouded-hollows-61483.herokuapp.com/index",
        live:"Live on Heroku",
        image:burger,
        github:"https://github.com/mitch-t/burger.git",
        code:"GitHub Code",
        description: "A fun little Full Stack application that uses mySQL, node express, and handlebars"
    }
]

function Project() {
    return (
        projects.map((project, i) => { 
        return (
        <div key={i} className="container">
            <div id="scroll" className="imgBox">
                    <div className="imgCont">
                    <h2 className ="imgBoxText"> { project.title }</h2>
                    <img className="img-fluid" src={ project.image } alt="projects"></img> 
                    </div>
                    <div className="colorElement"></div>
                <div className="imgBoxCont">
                    <div className="subtext">
                        <p> { project.description } </p>
                        <p><a className="site" href={ project.site } target="_blank" rel="noopener noreferrer"> { project.live } </a>
                        </p>
                        <a className="button" href={ project.github } target="_blank" rel="noopener noreferrer">{ project.code }</a>
                    </div>
                </div>
            </div>
        </div>
        )
    })
    );
}

export default Project;