import {FaReact, FaPython} from "react-icons/fa"
import {SiJavascript, SiCplusplus, SiTensorflow} from "react-icons/si"
import {DiNodejs} from "react-icons/di"

export const TechnologiesSlide = () => {
  return (
    <div className="slide">
      <div className="professional-career">
        <div className="professional-career-header">Technologies</div>
        <div className="technologies-grid">
            <div className="technologies-entry"><div className="technologies-icon"><FaReact /></div><div>React</div></div>
            <div className="technologies-entry"><div className="technologies-icon"><FaPython /></div><div>Python</div></div>
            <div className="technologies-entry"><div className="technologies-icon"><SiJavascript /></div><div>JavaScript</div></div>
            <div className="technologies-entry"><div className="technologies-icon"><SiCplusplus /></div><div>C++</div></div>
            <div className="technologies-entry"><div className="technologies-icon"><SiTensorflow /></div><div>Tensorflow</div></div>
            <div className="technologies-entry"><div className="technologies-icon"><DiNodejs /></div><div>Node</div></div>
        </div>
      </div>
    </div>
  );
};
