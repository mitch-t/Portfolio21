import React from "react";
import "../styles/project.css";
import schdlr from "../assets/weekdayPlanner.png";
import ManyGigs from "../assets/manygigs.png";
import weather from "../assets/weatherDash.png";
import fitness from "../assets/Fitapp.png";
import budget from "../assets/budget.png";
import suggestsocal from "../assets/SugSoCal.png";

let projects = [
    {
        title:"ManyGigs",
        subtitle:"Full Stack App that connects workers with work",
        image:ManyGigs,
        site:"https://manygigs.herokuapp.com/",
        live:"Live on Heroku",
        github:"https://github.com/mitch-t/ManyGigs",
        code:"GitHub Code",
        description: "Application that is created with Reactjs. Full-stack that uses CRUD for user posts. Connected to MongoDB with authentication feature"
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
        description: "A full-stack workout tracking application using Mongo database with Express routes. Allows a user to create, view, and track daily workouts. A user can log multiple exercises on a given day, tracking the name, type, weight, sets, reps, and duration of exercise, with a cardio exercise the user can track distance traveled."
    },
    {
        title:"Travel Budget",
        subtitle:"Keep track of your expenses with or without internet connection",
        image:budget,
        github:"https://github.com/mitch-t/TeamGenerator.git",
        code:"GitHub Code",
        description: "A Node CLI that takes in information about employees and generates an HTML webpage that displays a team roster based on the information provided by the user. Uses inquirer npm package."
    },
    {    
    title:"Day Planner",
        subtitle:"Plan your day with this 9-5 planner",
        image:schdlr,
        site:"https://mitch-t.github.io/Workday-Planner/",
        live:"Live on GitHub Pages",
        github:"https://github.com/mitch-t/Workday-Planner.git",
        code:"GitHub Code",
        description: "A simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Moment.js library was used to work with date and time."
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