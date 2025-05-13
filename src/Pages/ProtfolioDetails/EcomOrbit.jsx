import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import EcomOrbit1 from "../../assets/img/ecomOrbit/ecomOrbit1.png";
import EcomOrbit2 from "../../assets/img/ecomOrbit/ecomOrbit2.png";
import EcomOrbit3 from "../../assets/img/ecomOrbit/ecomOrbit3.png";
import EcomOrbit4 from "../../assets/img/ecomOrbit/ecomOrbit4.png";
import EcomOrbit5 from "../../assets/img/ecomOrbit/ecomOrbit5.png";
import EcomOrbit6 from "../../assets/img/ecomOrbit/ecomOrbit6.png";
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
        heading={"Ecom Orbit"}
        page="Full Stack Development for Ecom Orbit Platform"
      />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={EcomOrbit2} alt="img" style={{
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
                eComOrbit is a comprehensive financial analytics platform designed to help e-commerce businesses accurately calculate revenues, taxes, and other key financial metrics. Built using the MERN stack, it integrates seamlessly with popular marketplaces like Shopify, Amazon, and WooCommerce to provide real-time insights into sales performance, tax obligations, and profit margins. The platform aims to simplify financial management for online retailers by automating complex calculations and consolidating data from multiple sources.
              </p>
              <p className="fz-16 pra">
                Key features of eComOrbit include automated tax calculations based on regional regulations, detailed revenue reports, and customizable dashboards that offer a clear overview of business performance. The system also supports multi-currency transactions and provides tools for forecasting and budgeting. By leveraging secure APIs and robust data processing algorithms, eComOrbit ensures that users have access to accurate and up-to-date financial information, enabling informed decision-making.
              </p>
              <br></br>
              <p className="fz-16 pra">
                The result is a powerful tool that empowers e-commerce entrepreneurs to manage their finances with confidence. Whether you're a small business owner or managing a large online store, eComOrbit provides the insights and tools needed to optimize financial operations and drive growth.
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
                  Integrating data from multiple e-commerce platforms (Shopify, Amazon, WooCommerce) while maintaining consistency and accuracy across APIs was a key technical challenge.
                </li>
                <li>
                  Designing financial calculation logic that adapts to different tax laws, currencies, and regional compliance standards required extensive research and dynamic configuration.
                </li>
                <li>
                  Ensuring the security of sensitive financial data such as sales reports, customer transactions, and tax documents through role-based access and encryption protocols.
                </li>
                <li>
                  Creating intuitive dashboards and visualizations that could break down complex metrics into simple, actionable insights for users with varying levels of financial expertise.
                </li>
                <li>
                  Building a flexible, scalable backend architecture to handle large volumes of data in real-time without performance degradation during peak transaction periods.
                </li>
                <li>
                  Implementing multi-currency support and precise currency conversion logic to accommodate global sellers operating across different markets.
                </li>
                <li>
                  Providing forecasting and budgeting tools that dynamically adapt based on historical data and current trends required predictive logic and efficient data modeling.
                </li>
                <li>
                  Offering a seamless user experience while presenting large volumes of data involved careful UI/UX planning and frontend optimization for responsiveness and clarity.
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
                To address the challenges of e-commerce business management, we developed eComOrbit—an intelligent, all-in-one platform designed to help e-commerce businesses calculate revenues, taxes, and more. The platform seamlessly integrates with popular e-commerce platforms such as Shopify, Amazon, and WooCommerce, allowing business owners to consolidate data, streamline financial tracking, and gain real-time insights into their operations.

                We implemented advanced tax algorithms, customizable reporting, and multi-currency support to ensure the platform adapts to businesses operating across different regions and tax jurisdictions. With a focus on accuracy and ease of use, eComOrbit’s intuitive interface enables users to manage complex calculations, such as tax rates and profit margins, effortlessly. Automated alerts and forecasting tools help users stay on top of their financial health and compliance requirements.

                The result is a powerful, scalable solution that empowers e-commerce business owners to make data-driven decisions, optimize operations, and ensure financial accuracy. By centralizing revenue and tax management in one user-friendly platform, eComOrbit makes business finances more transparent and manageable, helping users grow and succeed in the competitive e-commerce landscape.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={EcomOrbit1} alt="img" />
              </div>
              <div className="thumb">
                <img src={EcomOrbit2} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={EcomOrbit3} alt="img" />
              </div>
              <div className="thumb">
                <img src={EcomOrbit4} alt="img" />
              </div>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ marginBottom: "15px" }}
            >
              <div className="thumb">
                <img src={EcomOrbit5} alt="img" />
              </div>
              <div className="thumb">
                <img src={EcomOrbit6} alt="img" />
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
