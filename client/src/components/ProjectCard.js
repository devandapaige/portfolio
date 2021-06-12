function ProjectCard(props) {
  //--- Projects --- {id: "", title: "", photo_src:"", description: "", link: "", repo: ""}
  //--- Tags --- {tag_id: "", tag_name: ""}
  //--- Linked -- {project_id: "", tag_id: ""}
  return (
    <div>
      <img src={props.photo_src} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.tagNames}</p>
      <p>{props.description}</p>
      <button href={props.link}>Read More</button>
      <button href={props.repo}>Github Repo</button>
    </div>
  );
}

export default ProjectCard;
