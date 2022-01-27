export const ProjectButton = ({ link, text }) => {
  if (!link) {
    return <></>;
  }

  return (
    <div className="project-button" onClick={(e) => e.stopPropagation()}>
        <a href={link} target="_blank"  rel="noreferrer">
      {text}</a>
    </div>
  );
};
