import {FaReact, FaPython} from "react-icons/fa"
import {SiJavascript, SiCplusplus, SiTensorflow} from "react-icons/si"
import {DiNodejs} from "react-icons/di"

export const TechnologiesSlide = () => {
  return (
    <div className="slide">
      <div className="professional-career">
        <div className="professional-career-header">Technologies</div>
        <div className="technologies-grid">
            <div className="technologies-entry" ><h2><FaReact /></h2></div>
            <div className="technologies-entry"><h2><FaPython /></h2></div>
            <div className="technologies-entry"><h2><SiJavascript /></h2></div>
            <div className="technologies-entry"><h2><SiCplusplus /></h2></div>
            <div className="technologies-entry"><h2><SiTensorflow /></h2></div>
            <div className="technologies-entry"><h2><DiNodejs /></h2></div>
        </div>
      </div>
    </div>
  );
};
