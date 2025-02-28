import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const OrganizationSkillsShowcaseComponent: React.FC = () => {
  return (
    <>
      <article className="organization-skills-showcase-component">
        <h1>Why Choose Us</h1>
        <div className="content-wrapper">
          <article>
            <h1>01</h1>
            <p>
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem cum, cumque itaque corporis omnis, aspernatur adipisci
              voluptates aliquid ex dolore commodi impedit esse? Autem deleniti
              dolores veniam nesciunt labore <RiDoubleQuotesR />
            </p>
          </article>
          <article>
            <h1>02</h1>
            <p>
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem cum, cumque itaque corporis omnis, aspernatur adipisci
              voluptates aliquid ex dolore commodi impedit esse? Autem deleniti
              dolores veniam nesciunt labore <RiDoubleQuotesR />
            </p>
          </article>
          <article>
            <h1>03</h1>
            <p>
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem cum, cumque itaque corporis omnis, aspernatur adipisci
              voluptates aliquid ex dolore commodi impedit esse? Autem deleniti
              dolores veniam nesciunt labore <RiDoubleQuotesR />
            </p>
          </article>
        </div>
      </article>
    </>
  );
};

export default OrganizationSkillsShowcaseComponent;
