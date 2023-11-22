import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, index }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={title.img} alt={title.title} className="project__img" />
        <h3 className="project__title">{title.title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
