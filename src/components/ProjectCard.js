import { useState } from "react";
import { ProjectButton } from "./ProjectButton";

export const ProjectCard = ({ project }) => {
  const projectStyle = {
    backgroundImage: `url(${project.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const content = project.description;

  const [showDescription, setShowDescription] = useState(project.descriptionIsOpen || false);

  const toggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="slide" onClick={toggleShowDescription}>
      <div className="project" style={projectStyle}>
        <div className="project-description-container">
          <div
            className={
              showDescription
                ? "project-description-active"
                : "project-description-inactive"
            }
          >
            {showDescription ? content : ""}
          </div>
        </div>
        <div className="project-title-container">
          <div className="project-title">{project.title}</div>
          <div className="project-buttons">
            <ProjectButton link={project.linkToCode} text="Code" />
            <ProjectButton link={project.linkToDemo} text="Demo" />
            <ProjectButton link={project.linkToCodepen} text="Code + Demo" />
          </div>
        </div>
      </div>
    </div>
  );
};
