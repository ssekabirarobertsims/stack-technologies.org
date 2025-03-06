import React from "react";
import OrganizationServicesComponent from "./Organization.Services.Component";
import OrganizationExperienceBarComponent from "./Organization.Experience.Component";
import OrganizationDevelopersComponent from "./Organization.Developers.Component";
import OrganizationSkillsShowcaseComponent from "./Organization.Skills.Showcase";
import TestimonialsComponent from "./Testimonials.Component";
import OrganizationRatingsComponent from "./Ratings.Component";
import ServicesPricingPlansComponent from "./Pricing.Component";
import AdvertComponent from "./Advert.Component";
import AboutOrganizationComponent from "./About.Organization.Component";

const MainPageComponent: React.FC = () => {

  return (
    <>
      <br />
      <br />
      <br />
      <main className="home-page-component">
        <section className="home-page-component-content-wrapper">
          <div className="card-components-wrapper">
            <AboutOrganizationComponent />
            <OrganizationExperienceBarComponent />
            <OrganizationServicesComponent />
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
