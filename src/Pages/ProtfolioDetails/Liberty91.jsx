import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Liberty911 from "../../assets/img/liberty91/liberty91-1.png";
import Liberty912 from "../../assets/img/liberty91/liberty91-2.png";
import Liberty913 from "../../assets/img/liberty91/liberty91-3.png";
import Liberty914 from "../../assets/img/liberty91/liberty91-4.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const Liberty91 = () => {
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
        page="Full Stack Development for Liberty91 Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={Liberty911} alt="img" style={{
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
                    <p>Liberty91</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2022-2024</p>
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
                Liberty91 is a real-time, AI-driven cybersecurity platform designed to deliver personalized threat intelligence to organizations.The platform continuously scans the surface and dark web to identify emerging threats and vulnerabilities that are directly relevant to an organization’s assets, infrastructure, and risk profile. By training an AI model on custom organizational data, Liberty91 ensures that alerts are highly targeted, actionable, and context-aware.
              </p>
              <p className="fz-16 pra">
                The application features robust role-based access, secure user authentication, real-time alerts, and an interactive dashboard for tracking threat activity. Security teams can view tailored threat profiles, receive recommendations, and take proactive measures before vulnerabilities are exploited. A dynamic knowledge base of threat actors, malware, and exploits is automatically updated and categorized, saving analysts countless hours of manual research and reporting.
              </p>
              <br></br>
              <p className="fz-16 pra">
                With scalability, privacy, and speed at its core, Liberty91 empowers small and mid-sized security teams with tools typically only available to enterprise-level organizations. Whether it’s identifying leaked credentials, zero-day exploits, or supply-chain risks, Liberty91 helps organizations make faster, smarter decisions in an increasingly complex cyber threat landscape.
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
                  Training an AI engine to accurately identify and prioritize threats based on an organization's unique assets, infrastructure, and industry context was a core technical challenge.
                </li>
                <li>
                  Ensuring real-time threat detection from both the surface and dark web required robust data pipelines, external API integrations, and continuous stream processing.
                </li>
                <li>
                  Handling sensitive cybersecurity data—such as leaked credentials, vulnerability reports, and internal asset mappings—demanded secure authentication, encryption, and strict access control.
                </li>
                <li>
                  Designing a clean, intuitive interface that provides deep threat intelligence without overwhelming users was crucial for usability and adoption.
                </li>
                <li>
                  Automating the creation and maintenance of dynamic threat profiles and knowledge cards required modular design, historical data processing, and AI summarization.
                </li>
                <li>
                  Building scalable infrastructure to support thousands of real-time alerts, user sessions, and threat queries without compromising speed or accuracy.
                </li>
                <li>
                  Managing alerts and insights in a way that’s actionable—without flooding users with irrelevant notifications—was addressed with a relevance-scoring algorithm.
                </li>
                <li>
                  Balancing proactive intelligence with alert fatigue involved fine-tuning the AI model, integrating user feedback loops, and creating smart filtering options.
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
                To address these cybersecurity challenges, we built Liberty91—a real-time, AI-driven threat intelligence platform tailored to each organization’s unique risk profile. The system continuously monitors the surface and dark web, intelligently filtering global cyber events to highlight only those relevant to the user’s infrastructure, sector, and location. With dual-role access for analysts and administrators, teams can track assets, investigate threats, and take action through a secure, data-rich interface.

                We implemented encrypted authentication, granular access controls, and intelligent alerting to ensure fast and secure delivery of high-priority intelligence. The platform automatically curates and updates threat actor profiles, malware timelines, and contextual summaries, allowing teams to make decisions quickly and confidently. A user-focused design keeps critical insights accessible without overwhelming less technical users, while backend automation ensures that data is always fresh and relevant.

                The result is a powerful cybersecurity assistant that empowers mid-sized organizations to act like enterprise SOCs—combining speed, accuracy, and affordability in one scalable, secure, and AI-driven experience.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={Liberty911} alt="img" />
              </div>
              <div className="thumb">
                <img src={Liberty912} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={Liberty913} alt="img" />
              </div>
              <div className="thumb">
                <img src={Liberty914} alt="img" />
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

export default Liberty91;
