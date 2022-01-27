import ReactFullpage from "@fullpage/react-fullpage";
import { ProjectCard } from "./ProjectCard";

const projects = [
  { title: "Projects" },
  { title: "First Project", backgroundImage: "/beat_machine.png", linkToCode: "https://www.google.com", linkToDemo: "https://www.google.com", description: "Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project,Some Project," },
  { title: "Second Project" },
  { title: "Third Project" },
];
export const FullPage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"F4962CFF-16A64BB3-82466A45-9D19B396"}
    scrollingSpeed={1000} /* Options here */
    anchors={["about", "projects", "blog"]}
    slidesNavigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper id="fullpage">
          <div className="section single-page">
            <div className="section-content">
              <div className="about-page section-card">About</div>
            </div>
          </div>
          <div className="section single-page">
            <div className="section-content">
              <div className="section-card section-card-with-slides">
                {projects.map((project, index) => (
                  <ProjectCard project={project} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="section single-page">
            <div className="section-content">
              <div className="blog-page section-card">Blog</div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
