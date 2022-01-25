import {BsLinkedin, BsGithub} from "react-icons/bs";

export const Header = () => {
    return (
        <div id="header">
            <a id="home" href="/">MirzaDoesCode</a>
            <a href="/">Projects</a>
            <a href="/">Blog</a>
            <a href="/">About</a>
            <a href="/" className="header-icon"><BsLinkedin /></a>
            <a href="/" className="header-icon"><BsGithub /></a>
        </div>
    )
}