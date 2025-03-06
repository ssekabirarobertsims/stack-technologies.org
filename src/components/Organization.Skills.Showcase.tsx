import React, { useRef } from "react";

const OrganizationSkillsShowcaseComponent: React.FC = () => {
  const contentRef = useRef(
    `We are determined to deliver the best results for your business
                needs and requirements. Our team of experts are dedicated to
                providing the best services to our clients and ensuring that they
                are satisfied with the results. We have worked with over 45
                clients and have deployed over 40 sites to deliver the best
                results possible for their business needs and requirements.` as unknown as string
  );

  return (
    <>
      <article className="organization-skills-showcase-component">
        <div className="content-wrapper">
          <article>
            <h1>Why Choose Us</h1>
            <p>{contentRef.current}</p>
          </article>
          <article>
            <img
              src="/photos/people-office-work-day_23-2150690145.jpg"
              alt=""
            />
          </article>
        </div>
      </article>
    </>
  );
};

export default OrganizationSkillsShowcaseComponent;
