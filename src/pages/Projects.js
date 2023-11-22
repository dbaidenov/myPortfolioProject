import Project from "./../components/project/project";

import projectsList from "../helpers/projects.list";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((project, index) => (
            <Project key={index} title={project} index={index} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
