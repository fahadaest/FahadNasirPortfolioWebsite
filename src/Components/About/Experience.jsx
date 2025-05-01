import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                Over 3 years of professional experience as a React/MERN stack developer, contributing to diverse projects across healthcare, cybersecurity, recruitment, e-commerce and many other domains. Proven ability to build responsive, scalable frontends and integrate secure, high-performance backend solutions
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">June 2022 - May 2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Full Stack Developer</h4>
                    <p className="fz-18 pra d-block">Aglivo, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Mar 2022 - May 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Trainee Frontend Developer</h4>
                    <p className="fz-18 pra d-block">Programmers Force, Pakistan</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Jan 2022 - Feb 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Intern JavaScript Developer (Remote)</h4>
                    <p className="fz-18 pra d-block">CodSoft, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
