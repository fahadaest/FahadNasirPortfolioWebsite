import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import PalPlug1 from "../../assets/img/palPlug/palplug1.png";
import PalPlug2 from "../../assets/img/palPlug/palplug2.png";
import PalPlug3 from "../../assets/img/palPlug/palplug3.png";
import PalPlug4 from "../../assets/img/palPlug/palplug4.png";
import PalPlug5 from "../../assets/img/palPlug/palplug5.png";
import PalPlug6 from "../../assets/img/palPlug/palplug6.png";
import detailbg from "../../assets/img/protfolio/prot-detailsbig.png";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const EcomOrbit = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <PageHeader
        heading={"PalPlug"}
        page="Full Stack Development for Ecom Orbit Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={PalPlug1} alt="img" style={{
              height: '700px',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }} />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>Ecom Orbit</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2023-2024</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Web Application Development</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                PalPlug is a modern networking and career-growth platform that bridges the gap between job seekers (Pals) and experienced professionals (Plugs) within companies. Designed to simplify the job search process, PalPlug enables company employees to register as “Plugs” and offer valuable services such as employee referrals, resume reviews, and interview preparation.
              </p>
              <p className="fz-16 pra">
                Over several months of iterative development and user research, PalPlug was built with a focus on trust, accessibility, and real-world career outcomes. The platform empowers job seekers to connect directly with industry insiders, increasing their chances of landing interviews through meaningful, personalized support. Each Plug has a dedicated profile showcasing their availability, expertise, and the companies they can refer to, while Pals can browse, connect, and track their progress through a clean and intuitive interface.
              </p>
              <br></br>
              <p className="fz-16 pra">
                PalPlug is more than just a referral platform — it’s a peer-powered ecosystem for mentorship and opportunity. With role-based access, secure messaging, real-time notifications, and scalable architecture, the platform supports thousands of users without compromising on performance or privacy. Whether you're a student breaking into tech or a mid-career professional seeking guidance, PalPlug makes the job-hunting journey more human, transparent, and effective.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <ul className="challenge__list">
                <li>
                  Building trust between job seekers and company insiders (Plugs) was essential, especially when dealing with referrals and career advice.
                </li>
                <li>
                  Encouraging employees to register as Plugs and actively participate required clear value propositions, intuitive onboarding, and user incentives.
                </li>
                <li>
                  Ensuring user privacy and secure handling of sensitive career-related data (resumes, job preferences, private messages) was a critical requirement.
                </li>
                <li>
                  Designing a seamless experience that caters to two distinct user roles — Pals (job seekers) and Plugs (employees) — without overcomplicating the interface.
                </li>
                <li>
                  Balancing transparency (for Pals) with privacy (for Plugs) required granular access controls, status indicators, and communication permissions.
                </li>
                <li>
                  Building a scalable infrastructure capable of handling thousands of profiles, requests, and real-time interactions without performance issues.
                </li>
                <li>
                  Managing interactions like resume reviews, referral requests, and interview prep in a structured way required workflow design and modular features.
                </li>
                <li>
                  Creating a fair and anti-spam environment where both parties feel respected and engaged — without the platform becoming transactional or impersonal.
                </li>
              </ul>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">
                To solve these challenges, we built PalPlug—a scalable, user-first platform that connects job seekers (Pals) with company insiders (Plugs) for referrals, resume reviews, and interview preparation. The system supports dual user roles with dedicated workflows, allowing Plugs to manage their availability and services, while Pals can browse profiles, request support, and track progress in real time.

                We implemented strong privacy controls, encrypted communication, and role-based access to ensure a secure environment for all interactions. The intuitive UI was designed to simplify career networking without overwhelming users, and automated notifications help streamline follow-ups and status updates. By centralizing mentorship, referrals, and feedback in one platform, PalPlug fosters trust, transparency, and career growth—turning cold job searches into guided journeys powered by real professionals.

                The result is a dynamic ecosystem where users engage meaningfully, professionals give back efficiently, and job seekers gain insider advantages—all through a clean, scalable, and secure digital experience.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={PalPlug1} alt="img" />
              </div>
              <div className="thumb">
                <img src={PalPlug2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={PalPlug3} alt="img" />
              </div>
              <div className="thumb">
                <img src={PalPlug4} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={PalPlug5} alt="img" />
              </div>
              <div className="thumb">
                <img src={PalPlug6} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Protfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className=" project__wrapone">
            {projectList
              .slice(1, 3)
              .map(({ heading, id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section>
    </>
  );
};

export default EcomOrbit;
