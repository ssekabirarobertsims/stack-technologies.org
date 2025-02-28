import React from "react";

const OrganizationExperienceBarComponent: React.FC = () => {
  return (
    <>
      <br />
      <article className="organization-experience-bar-component">
        <span>4</span>
        <div className="organization-experience-bar-component-content">
          <h1>Years Of Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consequatur unde quas voluptas error, aliquid temporibus rem! Nobis
            expedita quam numquam accusamus ipsa est, non mollitia saepe
            accusantium ea labore!
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
