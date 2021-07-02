import { SwiperSlide } from "swiper/react";

function ProjectCard(props) {
  //--- Projects --- {id: "", title: "", photo_src:"", description: "", link: "", repo: ""}
  //--- Tags --- {tag_id: "", tag_name: ""}
  //--- Linked -- {project_id: "", tag_id: ""}
  if (!props.link) {
    return (
      <SwiperSlide>
        <img src={props.photo_src} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.tagNames}</p>
        <p>{props.description}</p>
        <button href={props.repo} className="gitHubBtn">
          Github Repo
        </button>
      </SwiperSlide>
    );
  } else if (props.link) {
    return (
      <SwiperSlide>
        <img src={props.photo_src} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.tagNames}</p>
        <p>{props.description}</p>
        <button href={props.link} className="readMoreBtn">
          Read More
        </button>
        <button href={props.repo} className="gitHubBtn">
          Github Repo
        </button>
      </SwiperSlide>
    );
  }
}

export default ProjectCard;
