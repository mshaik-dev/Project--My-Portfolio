import React from "react";
// import ProjectCard from ''
const projects = [
  {
    title: "Youtube-clone",
    imageSrc: "./assets/Projects/download (7).jpg",
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Todo-list",
    imageSrc: "./assets/Projects/download-1.jpg",
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node", "Sass"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Project C",
    imageSrc: "./assets/Projects/dd.png",
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
];

const Project = () => {
  return (
    <section className="project_container" id="projects">
      <h2 className="project_title">PROJECTS</h2>
      <div className="Projects">
        {projects.map((list, id) => {
          console.log(list);
          return (
            <div className="project_card-Container">
              <img src={list.imageSrc} alt={`Image of ${list.title}`} />
              <h3 className="project_card-title">{list.title}</h3>
              <p className="roject_card-description">{list.description}</p>
              <ul className="project_card-skills">
                {list.skills.map((skill, id) => {
                  console.log(skill);
                  return (
                    <>
                      <li key={id} className="project_card-skill">
                        {skill}
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="project_card-links">
                <a href = { list.demo } className="project_card-link">Demo</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
