export const ProfessionalCareerEntry = ({ entry }) => {
  return (
    <div className="professional-career-entry">
      <div className="professional-career-entry-left">
        <div>{entry.time}</div>
        <div style={{fontWeight: "300"}}>{entry.location}</div>
      </div>
      <div className="professional-career-entry-right">
        <div style={{fontSize: "120%"}}>{entry.title}</div>
        <div style={{fontWeight: "300"}}>{entry.company}</div>
        {entry.stack ? <div style={{fontWeight: "300", fontStyle: "italic"}}>{entry.stack.join(" | ")}</div> : <></>}
      </div>
    </div>
  );
};
