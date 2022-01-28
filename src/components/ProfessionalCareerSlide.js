import { ProfessionalCareerEntry } from "./ProfessionalCareerEntry";
import { careerEntries } from "../constants/careerEntries";

export const ProfessionalCareerSlide = () => {
  return (
    <div className="slide">
      <div className="professional-career">
        <div className="professional-career-header">Professional Career</div>
        <div className="professional-career-content">
            {careerEntries.map((entry, index) => <ProfessionalCareerEntry entry={entry} key={index}/>)}
            </div>
      </div>
    </div>
  );
};
