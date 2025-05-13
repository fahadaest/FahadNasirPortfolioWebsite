import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import LastingLove1 from "../../assets/img/lastingLove/lastingLove1.png";
import LastingLove2 from "../../assets/img/lastingLove/lastingLove2.png";
import LastingLove3 from "../../assets/img/lastingLove/lastingLove3.png";
import LastingLove4 from "../../assets/img/lastingLove/lastingLove4.png";
import LastingLove5 from "../../assets/img/lastingLove/lastingLove5.png";
import LastingLove6 from "../../assets/img/lastingLove/lastingLove6.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const LastingLove = () => {
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
        heading={"Lasting Love"}
        page="Full Stack Development for Lasting Love Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={LastingLove1} alt="img" style={{
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
                    <p>Lasting Love</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2025-2025</p>
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
                Lasting Love is a heartfelt, secure memory-sharing platform built using the MERN stack. Created in memory of Jamie Lambros, who lost his life heroically saving others, the platform empowers users to preserve emotional video messages for their loved ones. Users can record memories and choose how they’re shared—publicly with the world, privately with select individuals, or scheduled for future delivery based on specific life events or dates.
              </p>
              <p className="fz-16 pra">
                The platform features advanced privacy controls, secure file uploads, and role-based permissions to ensure every memory is handled with sensitivity and care. Private memories remain hidden until confirmed by trusted contacts through the submission of a death certificate, while scheduled memories are automatically delivered at predefined times. A clean, intuitive UI makes it easy for users of all ages to record, view, and receive messages in moments that matter most.
              </p>
              <br></br>
              <p className="fz-16 pra">
                With built-in email notifications, encrypted data handling, and scalable architecture, Lasting Love ensures that memories are preserved and delivered exactly as intended. Whether it’s a farewell message, a birthday surprise, or a legacy video for future generations, the platform provides a secure digital space to share love, stories, and connection—when it’s needed most.
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
                  Ensuring emotional sensitivity and trust was critical, especially when users are sharing deeply personal video messages with loved ones.
                </li>
                <li>
                  Implementing strict privacy controls for private and scheduled memories required secure authentication, encrypted data storage, and certificate verification workflows.
                </li>
                <li>
                  Supporting multiple delivery modes—public, private, and scheduled—meant building flexible user flows and conditional logic without compromising the user experience.
                </li>
                <li>
                  Designing a respectful confirmation process for private memories involved death certificate upload, user validation, and ethical data handling.
                </li>
                <li>
                  Balancing simplicity for non-technical users with robust backend logic required a carefully designed, intuitive interface with minimal learning curve.
                </li>
                <li>
                  Building a scalable infrastructure to handle high-definition video uploads, timed deliveries, and secure access was essential for reliability and performance.
                </li>
                <li>
                  Integrating automated email notifications and status tracking helped keep recipients informed while ensuring scheduled memories reach the right people at the right time.
                </li>
                <li>
                  Maintaining a respectful digital environment for memory sharing meant preventing misuse while fostering meaningful and lasting connections.
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
                To address the emotional and technical challenges of memorializing loved ones, we built Lasting Love—a secure, user-first platform where people can record and deliver heartfelt video memories. Users can choose between public, private, or scheduled memories, with each option supporting unique workflows for consent, delivery, and visibility. Private memories remain secure until verified, while scheduled ones are delivered at meaningful moments defined by the sender.

                We implemented encrypted file handling, role-based access, and death certificate validation to protect sensitive content and ensure respectful distribution. The interface is designed for ease of use across all age groups, making it simple to record and manage memories. Email notifications and status tracking further enhance the delivery process while maintaining privacy and intention.

                The result is a compassionate digital space that helps preserve and share love in its most personal form. Whether for farewells, future birthdays, or legacy messages, Lasting Love transforms memory sharing into a deeply human, secure, and scalable experience.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={LastingLove1} alt="img" />
              </div>
              <div className="thumb">
                <img src={LastingLove2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={LastingLove3} alt="img" />
              </div>
              <div className="thumb">
                <img src={LastingLove4} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={LastingLove5} alt="img" />
              </div>
              <div className="thumb">
                <img src={LastingLove6} alt="img" />
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

export default LastingLove;
