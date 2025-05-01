import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                Bachelor of Science in Computer Science from UMT Lahore (2019–2023), with a strong foundation in programming, data structures, web development, and system design. Completed relevant coursework in OOP, DSA, databases, machine learning, and mobile app development
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2019-2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Bachelors in Computer Science</h4>
                    <p className="fz-18 pra d-block">UMT, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Jan 2022 - Mar 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Mern Stack Development Course</h4>
                    <p className="fz-18 pra d-block">PNY, Lahaore Pakistan</p>
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

export default Education;
