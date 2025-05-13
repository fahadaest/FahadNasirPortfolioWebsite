import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Wellwink1 from "../../assets/img/wellwink/wellwink1.png";
import Wellwink2 from "../../assets/img/wellwink/wellwink2.png";
import Wellwink3 from "../../assets/img/wellwink/wellwink3.png";
import Wellwink4 from "../../assets/img/wellwink/wellwink4.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const Wellwink = () => {
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
        heading={"WellWink"}
        page="Full Stack Development for Wellwink Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={Wellwink1} alt="img" style={{
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
                    <p>Wellwink</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>2021-2022</p>
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
                WellWink is a modern healthcare engagement platform built to bridge the gap between healthcare providers and their patients. With a focus on enhancing communication, streamlining care delivery, and improving patient satisfaction, WellWink empowers clinics and medical professionals to deliver seamless, personalized care in a digital-first environment.
              </p>
              <p className="fz-16 pra">
                During the development of WellWink, our goal was to combine HIPAA-compliant technology with a user-friendly interface that supports real-time interaction, appointment scheduling, patient education, and follow-up management. We designed features that allow providers to monitor engagement, reduce no-shows, and keep patients involved in their treatment plans through intuitive dashboards and smart notifications.
              </p>
              <br />
              <p className="fz-16 pra">
                WellWink goes beyond traditional patient portals by creating a connected ecosystem that promotes proactive care and strengthens patient-provider relationships. With scalable infrastructure, secure data handling, and a clean, mobile-responsive UI, the platform transforms how healthcare is delivered—making it more accessible, empathetic, and efficient for everyone involved.
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
                  Establishing trust between healthcare providers and patients was crucial, especially when dealing with sensitive medical data and ongoing care communication.
                </li>
                <li>
                  Designing an onboarding flow that helps clinics and providers quickly set up their services while maintaining compliance with healthcare standards was a key priority.
                </li>
                <li>
                  Implementing HIPAA-compliant data handling, secure messaging, and access control mechanisms was essential for ensuring patient privacy and platform security.
                </li>
                <li>
                  Creating an intuitive UI that supports both medical staff and patients without overwhelming users with complex options or medical jargon required thoughtful UX planning.
                </li>
                <li>
                  Balancing real-time communication with scheduled updates and follow-ups demanded robust notification logic and smart engagement workflows.
                </li>
                <li>
                  Building scalable architecture to support multiple clinics, thousands of users, and real-time interactions without sacrificing performance or reliability was a major technical goal.
                </li>
                <li>
                  Integrating core healthcare features like appointment scheduling, patient progress tracking, and digital health content into a cohesive workflow required modular system design.
                </li>
                <li>
                  Ensuring patient engagement while avoiding alert fatigue or misuse of communication tools called for custom permission layers and provider-configurable settings.
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
                To address the challenges of patient engagement and clinic efficiency, we built WellWink—a HIPAA-compliant digital health platform that connects healthcare providers with their patients through secure messaging, personalized care plans, and real-time updates. The system supports multi-role access for doctors, nurses, and patients, ensuring everyone has the right tools to communicate, track progress, and manage care effectively.

                We implemented robust privacy protections, end-to-end encrypted communication, and intuitive user workflows tailored to both clinical staff and patients. The UI was crafted for clarity and ease-of-use, enabling seamless appointment scheduling, document sharing, and ongoing care coordination without friction. Automated alerts, secure access controls, and mobile-first design ensure users stay engaged while providers maintain full oversight.

                The result is a modern healthcare experience where patient relationships extend beyond clinic walls, providers streamline their workflows, and health outcomes improve through consistent digital touchpoints—all within a scalable, secure, and user-friendly ecosystem.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={Wellwink1} alt="img" />
              </div>
              <div className="thumb">
                <img src={Wellwink2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={Wellwink3} alt="img" />
              </div>
              <div className="thumb">
                <img src={Wellwink4} alt="img" />
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

export default Wellwink;
