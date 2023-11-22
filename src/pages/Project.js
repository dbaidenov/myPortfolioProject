//useParams используется для того чтобы использовать параметры для url в path route-а
import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/btnGitHub";
import projectList from "../helpers/projects.list";

const Project = () => {
  const { id } = useParams();
  const projectId = +id;
  const project = projectList[projectId];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.img} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          {project.githubLink && <BtnGitHub link={project.githubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;
