import ReactFullpage from "@fullpage/react-fullpage";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../constants/projects";
import { ProfessionalCareerSlide } from "./ProfessionalCareerSlide";
import { AcademicCareerSlide } from "./AcademicCareerSlide";
import {TechnologiesSlide} from "./TechologiesSlide"
import { AboutMePage } from "./AboutMePage";

export const FullPage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"F4962CFF-16A64BB3-82466A45-9D19B396"}
    scrollingSpeed={500} /* Options here */
    anchors={["about", "projects", "cv"]}
    slidesNavigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper id="fullpage">
          <div className="section single-page">
            <div className="section-content">
              <AboutMePage />
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
              <div className="section-card section-card-with-slides">
                <ProfessionalCareerSlide />
                <AcademicCareerSlide />
                <TechnologiesSlide />
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
