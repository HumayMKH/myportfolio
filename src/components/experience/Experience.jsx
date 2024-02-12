import "../experience/experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experienceData = [
  {
    id: 1,
    field: "Frontend Development",
    className: "experience__frontend",
    names: [
      "HTML",
      "CSS (SASS)",
      "Javascript",
      "Typescript",
      "React.js (Redux)",
      "REST API",
      "Bootstrap",
      "Jquery",
      "Tailwind",
    ],
    experience: [
      "Experienced",
      "Experienced",
      "Experienced",
      "Basic",
      "Experienced",
      "Experienced",
      "Experienced",
      "Experienced",
      "Basic",
    ],
  },
  {
    id: 2,
    field: "Other Skills",
    className: "other__skills",
    names: [
      "Responsive Web Design",
      "Figma",
      "Git/GitHub",
      "Agile/Scrum",
      "Jira",
      "Azure DevOps",
      "SPA",
    ],
    experience: ["", "", "", "", "", "", ""],
  },
  {
    id: 2,
    field: "Familiar",
    className: "familiar",
    names: [
      ".Net",
      "C#",
      "ASP.NET",
      "MVC",
      "Entity Framework",
      "SQL",
      "MS SQL Server",
      "Windows Forms",
    ],
    experience: ["", "", "", "", "", "", "", ""],
  },
  {
    id: 2,
    field: "Backend Development",
    className: "experience__backend",
    names: ["Node JS", "MongoDB", "MySQL"],
    experience: ["", "", ""],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {experienceData.map((props) => {
          return (
            <div key={props.id} className={props.className}>
              <h3>{props.field}</h3>
              <div className="experience__content">
                {props.names.map((name, index) => {
                  return (
                    <article key={index} className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h4>{name}</h4>

                        {props.experience[index] && (
                          <small className="text-light">
                            {props.experience[index]}
                          </small>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
