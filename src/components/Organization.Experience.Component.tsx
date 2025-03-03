import React from "react";

const OrganizationExperienceBarComponent: React.FC = () => {
  return (
    <>
      <article className="organization-experience-bar-component">
        <span>4</span>
        <div className="organization-experience-bar-component-content">
          <h1>Years Of Experience</h1>
          <p>
            We have been in the industry for over 4 years and have worked with
            over 45 clients to deliver the best results possible for their
            business needs and requirements with our team of 24 developer
            experts.
          </p>
        </div>
        <div
          className="organization-experience-bar-component-content"
          id="progress-count"
        >
          <article>
            <h1 id="rate">40+</h1>
            <span>Sites Deployed</span>
          </article>
          <article>
            <h1 id="rate">45+</h1>
            <span>Clients Satisfied</span>
          </article>
          <article>
            <h1 id="rate">24</h1>
            <span>Developer Experts</span>
          </article>
          <article>
            <h1 id="rate">2</h1>
            <span>Awards Won</span>
          </article>
        </div>
      </article>
    </>
  );
};

export default OrganizationExperienceBarComponent;
