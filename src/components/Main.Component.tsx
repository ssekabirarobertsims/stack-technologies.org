import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
import OrganizationServicesComponent from "./Organization.Services.Component";
import OrganizationExperienceBarComponent from "./Organization.Experience.Component";
import OrganizationDevelopersComponent from "./Organization.Developers.Component";
import OrganizationSkillsShowcaseComponent from "./Organization.Skills.Showcase";
import TestimonialsComponent from "./Testimonials.Component";
import OrganizationRatingsComponent from "./Ratings.Component";
import ServicesPricingPlansComponent from "./Pricing.Component";
import AdvertComponent from "./Advert.Component";

const MainPageComponent: React.FC = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <br />
      <br />
      <br />
      <a href="/#">
        <button
          type="button"
          className="navigation-upper-scroll-button"
          ref={buttonRef}
        >
          <BsArrowUp />
        </button>
      </a>
      <main className="home-page-component">
        <section className="home-page-component-content-wrapper">
          <div className="card-components-wrapper">
            <OrganizationServicesComponent />
            <OrganizationExperienceBarComponent />
            <OrganizationDevelopersComponent />
            <OrganizationSkillsShowcaseComponent />
            <ServicesPricingPlansComponent />
            <AdvertComponent />
            <TestimonialsComponent />
            <OrganizationRatingsComponent />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPageComponent;
