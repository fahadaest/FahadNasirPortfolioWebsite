import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import GunBuyBack1 from "../../assets/img/gunBuyBack/gunBuyBack1.png";
import GunBuyBack2 from "../../assets/img/gunBuyBack/gunBuyBack2.png";
import GunBuyBack3 from "../../assets/img/gunBuyBack/gunBuyBack3.png";
import GunBuyBack4 from "../../assets/img/gunBuyBack/gunBuyBack4.png";
import GunBuyBack5 from "../../assets/img/gunBuyBack/gunBuyBack5.png";
import GunBuyBack6 from "../../assets/img/gunBuyBack/gunBuyBack6.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const GunBuyBack = () => {
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
        heading={"GunBuyBack"}
        page="Full Stack Development for GunBuyBack Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={GunBuyBack1} alt="img" style={{
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
                    <p>GunBuyBack</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2024-2024</p>
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
                GunBuyback.org is a federally licensed, secure online platform designed to help individuals safely and anonymously sell or surrender unwanted firearms. Built to support nationwide accessibility, the platform offers a streamlined process where users can receive an instant valuation, ship their firearms using prepaid FedEx labels, and receive payment—all from the privacy of their own homes. It eliminates the need for in-person exchanges or local law enforcement involvement, making responsible firearm disposal easier than ever.
              </p>
              <p className="fz-16 pra">
                Throughout the development of GunBuyback.org, the core priorities were legal compliance, user trust, and system security. I built the platform using the MERN stack to ensure end-to-end encryption, robust user authentication, and scalable infrastructure. Key features include a dynamic pricing algorithm, secure document uploads, real-time tracking of firearm status, and automated notifications throughout the transaction lifecycle. A clean, responsive interface ensures a frictionless experience for users of all technical backgrounds.
              </p>
              <br></br>
              <p className="fz-16 pra">
                GunBuyback.org isn’t just a tech solution—it’s a public safety initiative powered by smart engineering. With over 25,000 firearms processed and $15M paid out to users, the platform demonstrates how thoughtful digital design can contribute meaningfully to community safety. Whether someone is downsizing their collection or surrendering a weapon voluntarily, this project offers a reliable, private, and efficient pathway for firearm buybacks at scale.
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
                  Establishing public trust was essential, especially when encouraging anonymous firearm submissions through an online platform.
                </li>
                <li>
                  Designing a legally compliant system involved coordinating with licensed firearm dealers (FFLs) and verifying submissions against local and federal regulations.
                </li>
                <li>
                  Protecting user privacy and sensitive data—such as identities, firearm details, and shipping information—required strong encryption and secure data handling protocols.
                </li>
                <li>
                  Creating an intuitive submission process with real-time status tracking helped users navigate complex steps like valuation, packaging, and shipping.
                </li>
                <li>
                  Managing time-sensitive logistics and communications demanded automated email/SMS updates, conditional workflows, and API integrations with shipping providers.
                </li>
                <li>
                  Ensuring accessibility across devices and demographics meant optimizing UI/UX for simplicity, speed, and clarity, regardless of technical background.
                </li>
                <li>
                  Building a scalable backend to support national operations involved asynchronous processing, cloud-based storage, and serverless functions for peak loads.
                </li>
                <li>
                  Preventing misuse and ensuring platform integrity required rate limiting, form validation, and manual admin review for flagged submissions.
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
                To address the sensitive and critical nature of firearm reduction, we built GunBuyback.org—a secure, community-driven platform that enables individuals to safely and anonymously surrender firearms through licensed dealers. The system facilitates seamless collaboration between users, FFLs, and logistics partners to ensure legal compliance, accurate tracking, and hassle-free pickup or drop-off processes.

                We prioritized user privacy with end-to-end encryption, anonymized submissions, and secure document handling. From automated shipping labels to real-time status updates, the platform streamlines each step of the process while maintaining transparency and legal integrity. A simple, accessible UI empowers individuals to act responsibly, even without technical knowledge.

                The result is a scalable, trustworthy digital solution that makes it easier for communities to reduce gun violence. By combining technology with civic responsibility, GunBuyback.org transforms a complex process into a safe, user-friendly experience—bridging the gap between intent and action.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={GunBuyBack1} alt="img" />
              </div>
              <div className="thumb">
                <img src={GunBuyBack2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={GunBuyBack3} alt="img" />
              </div>
              <div className="thumb">
                <img src={GunBuyBack4} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={GunBuyBack5} alt="img" />
              </div>
              <div className="thumb">
                <img src={GunBuyBack6} alt="img" />
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

export default GunBuyBack;
