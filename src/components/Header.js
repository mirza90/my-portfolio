import {BsLinkedin, BsGithub} from "react-icons/bs";

export const Header = () => {
    return (
        <div id="header">
            <a id="home" href="#about">MirzaDoesCode</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#cv">CV</a>
            <a href="https://www.linkedin.com/in/mirza-canovic-9048b390/" target="_blank" rel="noreferrer" className="header-icon"><BsLinkedin /></a>
            <a href="https://github.com/mirza90" target="_blank" rel="noreferrer" className="header-icon"><BsGithub /></a>
        </div>
    )
}