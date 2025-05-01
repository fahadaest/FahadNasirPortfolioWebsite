import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import reactJs from "../../assets/img/about/reactjs.png";
import nodeJs from "../../assets/img/about/nodejs.png";
import mongodb from "../../assets/img/about/mongodb.png";
import tailwind from "../../assets/img/about/tailwindcss.png";
import expressJs from "../../assets/img/about/express.png";
import javascript from "../../assets/img/about/javascript.png";

const skillsList = [
  {
    id: 1,
    skill: "JavaScript",
    percentage: "94%",
    image: javascript,

  },
  {
    id: 2,
    skill: "React.js",
    percentage: "95%",
    image: reactJs,

  },
  {
    id: 3,
    skill: "Node.js",
    percentage: "90%",
    image: nodeJs,

  },
  {
    id: 4,
    skill: "Express.js",
    percentage: "90%",
    image: expressJs,

  },
  {
    id: 5,
    skill: "Tailwind CSS",
    percentage: "92%",
    image: tailwind,
  },
  {
    id: 6,
    skill: "MongoDB",
    percentage: "88%",
    image: mongodb,

  }

];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                Proficient in JavaScript, TypeScript, and modern front-end technologies like React, Redux, and Tailwind CSS. Experienced with back-end development using Node.js, Express.js, MongoDB, and RESTful APIs. Strong expertise in version control with Git, cloud deployments, and performance optimization
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block" style={{ textAlign: "left" }}>{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
