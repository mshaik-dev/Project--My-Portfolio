import React from "react";

const Experience = () => {
  const skills = [
    {
      title: "HTML",
      imageSrc: "./assets/skills/html.png",
    },
    {
      title: "CSS",
      imageSrc: "./assets/skills/css.png",
    },
    {
      title: "React",
      imageSrc: "./assets/skills/react.png",
    },
    {
      title: "Node",
      imageSrc: "./assets/skills/node.png",
    },
    {
      title: "MongoDB",
      imageSrc: "./assets/skills/mongodb.png",
    },
    {
      title: "Javascript",
      imageSrc: "./assets/skills/javascript.png",
    },
  ];

  const history = [
    {
      role: "Software developer",
      organisation: "Synergy Technologies",
      startDate: "May, 2024",
      endDate: " working",
      experiences: ["Experience in reactJS, Mongodb,Postgres,MySQL,Node"],
      imageSrc: "./assets/hero/synergy.png",
    }, 
    {
      role: "Intership",
      organisation: "Google",
      startDate: "Sept, 2023",
      endDate: " May, 2024",
      experiences: ["Worked on Google Maps"],
      imageSrc: "assets/history/google.png",
    },
    
  ];
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title_name">Experience</h2>
      <div className="experience-content">
        <div className="experience-skills">
          {skills.map((skill, id) => {
            console.log(id + skill);
            return (
              <div key={id} className="experience-skill">
                <div className="experience-imageContainer">
                  <img src={skill.imageSrc} alt="images" width="100px" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="experience-history">
          {history.map((historyItem, id) => {
            console.log(history);
            return (
              <li className="experience-historyItem">
                <img
                  src={historyItem.imageSrc}
                  alt={historyItem.organisation} width ="100px" height="50px"/>
                <div className="historyItemDetails">
                  <h3>
                    {historyItem.role}, {historyItem.organisation}
                  </h3>
                  <p>
                    {historyItem.startDate},{historyItem.endDate}
                  </p>
                  <ul>
                    {historyItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
