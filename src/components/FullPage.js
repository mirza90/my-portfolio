import ReactFullpage from "@fullpage/react-fullpage";

export const FullPage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"F4962CFF-16A64BB3-82466A45-9D19B396"}
    scrollingSpeed={1000} /* Options here */
    anchors={["about", "projects", "blog"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper id="fullpage">
          <div className="section single-page">
            <div className="section-content">
              <div className="about-page">About</div>
            </div>
          </div>
          <div className="section single-page projects-page">
            <div className="section-content">
              <div className="slide">
                <div className="project">Projects</div>
              </div>
              <div className="slide">
                <div className="project">First Project</div>
              </div>
              <div className="slide">
                <div className="project">Second Project</div>
              </div>
              <div className="slide">
                <div className="project">Third Project</div>
              </div>
            </div>
          </div>
          <div className="section single-page">
            <div className="section-content"><div className="blog-page">Blog</div></div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
