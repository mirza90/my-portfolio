import {BsLinkedin, BsGithub} from "react-icons/bs";

export const Header = () => {
    return (
        <div id="header">

            <a id="home" href="#about" onClick={e => 
                {
                let target = document.getElementById("about");
                e.preventDefault();
                target && target.scrollIntoView({ behavior: "smooth", block: "start"});
                }
            }>MirzaDoesCode</a>
            <a href="#projects" onClick={e => 
                {
                let target = document.getElementById("projects");
                e.preventDefault();
                target && target.scrollIntoView({ behavior: "smooth", block: "start"});
                }
            }>Projects</a>
            <a href="#blog" onClick={e => 
                {
                let target = document.getElementById("blog");
                e.preventDefault();
                target && target.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>Blog</a>
            <a href="#about"onClick={e => 
                {
                let target = document.getElementById("about");
                e.preventDefault();
                target && target.scrollIntoView({ behavior: "smooth", block: "start"});
                }
            }>About</a>
            <a href="/" className="header-icon"><BsLinkedin /></a>
            <a href="/" className="header-icon"><BsGithub /></a>
        </div>
    )
}