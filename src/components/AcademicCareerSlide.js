import {academicEntries} from "../constants/academicEntries";
import { AcademicCareerEntry } from "./AcademicCareerEntry";

export const AcademicCareerSlide = () => {
  return (
    <div className="slide">
      <div className="professional-career">
        <div className="professional-career-header">Academics</div>
        <div className="professional-career-content">
            {academicEntries.map((entry, index) => <AcademicCareerEntry entry={entry} key={index} />)}
            </div>
      </div>
    </div>
  );
};
