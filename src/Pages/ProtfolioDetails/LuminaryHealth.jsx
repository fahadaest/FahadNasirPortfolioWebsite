import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import luminaryHealth1 from "../../assets/img/luminaryHealth/luminaryHealth1.png";
import luminaryHealth2 from "../../assets/img/luminaryHealth/luminaryHealth2.png";
import luminaryHealth3 from "../../assets/img/luminaryHealth/luminaryHealth3.png";
import luminaryHealth4 from "../../assets/img/luminaryHealth/luminaryHealth4.png";
import luminaryHealth5 from "../../assets/img/luminaryHealth/luminaryHealth5.png";
import luminaryHealth6 from "../../assets/img/luminaryHealth/luminaryHealth6.png";
import detailbg from "../../assets/img/protfolio/prot-detailsbig.png";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const LuminaryHealth = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>

      <PageHeader
        heading={"Luminary Health"}
        page="Full Stack Development for Luminary Healthcare Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>Luminary Health</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2024-2025</p>
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
              {/* <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id }) => (
                  <li key={id}>
                    <Link to={""}>
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                Luminary Health is an end-to-end digital healthcare platform built to modernize the way medical institutions handle patient referrals, insurance claims, and role-based data access — all while adhering to the strictest standards of security and compliance mandated by HIPAA (Health Insurance Portability and Accountability Act).
              </p>
              <p className="fz-16 pra">
                Spanning over 10–12 months of planning, development, and deployment, Luminary Health was designed from the ground up to solve critical inefficiencies in the healthcare ecosystem. The platform provides a unified portal where doctors, administrators, patients, and insurance companies can interact securely and transparently. It supports multi-role access management, real-time claims tracking, encrypted communication, audit logging, and automated notifications to ensure that users are informed at every step of the process.
              </p>
              <br></br>
              <p className="fz-16 pra">
                In an industry where sensitive patient data, financial details, and medical workflows intersect, Luminary Health delivers both usability and peace of mind. Every module — from claims submission to referral handling — was engineered with patient privacy, security, and operational efficiency at its core. The platform was also designed to scale, with a responsive and modular architecture suitable for clinics, hospitals, and insurance networks.
              </p>
              <br></br>
              <p className="fz-16 pra">
                Whether it’s a healthcare provider managing referrals, an insurer processing claims, or a patient tracking their submission status, Luminary Health offers a seamless and secure experience powered by modern web technologies, strong encryption protocols, and rigorous validation logic.
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
                  Ensuring full compliance with HIPAA regulations while managing vast amounts of sensitive patient health data posed a significant challenge.
                </li>
                <li>
                  Healthcare providers and insurance companies often relied on outdated, manual processes for referrals and claims, leading to delays, errors, and inefficiencies.
                </li>
                <li>
                  Stakeholders (patients, doctors, insurers) had limited visibility into claim statuses, resulting in poor transparency and delayed decision-making.
                </li>
                <li>
                  Designing a secure and intuitive system that supports multiple user roles (admins, doctors, insurers, etc.) without compromising data segregation or access control.
                </li>
                <li>
                  Tracking and managing referrals across different providers and departments was disorganized and lacked a centralized, accessible system.
                </li>
                <li>
                  Without robust encryption and network-level safeguards, traditional systems were prone to breaches, unauthorized access, and data leakage.
                </li>
                <li>
                  Existing systems lacked integration between claims, referrals, and communication tools, forcing users to switch platforms and manually update records.
                </li>
                <li>
                  Without user-friendly interfaces or automated notifications, medical staff had to invest additional time explaining claim/referral statuses to patients and insurers.
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
                To address these challenges, we developed Luminary Health—a fully HIPAA-compliant, end-to-end healthcare management platform that streamlines both claims processing and referral tracking through a secure, scalable, and user-centric portal. The system introduces multi-role access control, ensuring that administrators, providers, and insurance agents interact with tailored dashboards aligned with their responsibilities. We implemented robust security measures, including SSL/TLS encryption, role-based access control, detailed audit logging, and VPC-based network isolation, to protect sensitive patient data at every layer. Real-time claim tracking and automated notifications drastically improved transparency and reduced delays in communication. The centralized referral system enabled healthcare providers to seamlessly manage patient referrals, eliminating redundancies and manual follow-ups. As a result, the platform enhanced operational efficiency, minimized human error, ensured strict regulatory compliance, and fostered greater trust among all stakeholders. The successful delivery of Luminary Health has empowered users with faster workflows, secure data handling, and reliable system performance in real-world healthcare environments
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={luminaryHealth1} alt="img" />
              </div>
              <div className="thumb">
                <img src={luminaryHealth2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={luminaryHealth3} alt="img" />
              </div>
              <div className="thumb">
                <img src={luminaryHealth4} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={luminaryHealth5} alt="img" />
              </div>
              <div className="thumb">
                <img src={luminaryHealth6} alt="img" />
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

export default LuminaryHealth;
