import React from "react";
import { ArrowUpShort, ArrowRight, Whatsapp, Linkedin, Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Whatsapp",
    icon: <Whatsapp />,
    url: "https://wa.me/971554799130",
  },
  {
    id: 2,
    platfrom: "Linkedin",
    icon: <Linkedin />,
    url: "https://linkedin.com/in/fahadnasirr/",
  },
  {
    id: 3,
    platfrom: "Download CV",
    icon: <ArrowRight />,
    url: "/MyCV.pdf",
    download: true,
  },
  {
    id: 4,
    platfrom: "Github",
    icon: <Github />,
    url: "https://github.com/fahadaest",
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I'm Fahad Nasir, I'm a Full Stack Developer, Currently
                  residing in the International City Dubai.
                </p>
                <a href="mailto:fahhadnasir@gmail.com?subject=Hello%20Fahad&body=I%20visited%20your%20portfolio!">fahhadnasir@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, url, download }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="social__footer" download={download ? true : undefined}>
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2023 {" "}
              <Link to={"/"} className="base">
                Fahad.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
            </ul>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
