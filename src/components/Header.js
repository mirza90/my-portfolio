import {BsLinkedin, BsGithub} from "react-icons/bs";

export const Header = () => {
    return (
        <div id="header">

            <a id="home" href="#about">MirzaDoesCode</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#about">About</a>
            <a href="/" className="header-icon"><BsLinkedin /></a>
            <a href="/" className="header-icon"><BsGithub /></a>
        </div>
    )
}