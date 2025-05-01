import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "fahhadnasir@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+(971) 55 479 9130",
  },
  {
    id: 3,
    system: "Location",
    contact: "International City, Dubai, UAE",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      <Linkedin />,
      <Github />,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                A passionate React and MERN stack developer with 3+ years of hands-on experience building scalable web applications. Skilled in crafting responsive UIs, optimizing performance, and delivering clean, maintainable code in fast-paced environments
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""} className="no-transform">{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={""}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
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

export default AboutMe;
