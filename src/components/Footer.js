import React from "react";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/footer.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/GitHub.png";

function Footer() {
    return (
    <footer className="footer">
        <div className="footerConnectCont">
            Contact Me
            <a className="linkedin" href="http://www.linkedin.com/in/thomas-mitchell-5a84223a" 
            target="_blank" rel="noopener noreferrer">
            <img className="linkedImg" src={linkedin} alt="Linkedin"></img>
            </a>
            <a className="github" href="https://github.com/mitch-t" target="_blank" rel="noopener noreferrer">
            <img className="gitImg" src={github} alt="GitHub"></img>
            </a>
        </div>
        <div className="contact">
        <a id="email" href="mitcht032@yahoo.com">mitcht032@yahoo.com</a>
        </div>
        <div className="footerNavCont">
            <p role="img" id="tm">Made by TM<span role="img"
             aria-label="techman">👨‍💻</span>
            </p>
            <p id="year">2021
            </p>
            <a className="topButton scroll-anchor-link" href="#top">
            Back To Top<FontAwesomeIcon icon={faArrowCircleUp} /></a>
        </div>
    </footer>
  );
}

export default Footer;