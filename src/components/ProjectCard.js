import { useState } from "react";

export const ProjectCard = ({ project }) => {
  const projectStyle = {
    backgroundImage: "url('/beat_machine.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const content =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  const [showDescription, setShowDescription] = useState(false);

  const toggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  const test = (e) => {
    e.stopPropagation();
    console.log(e);
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
            <div className="project-button" onClick={test}>
              Code
            </div>
            <div className="project-button">Demo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
