import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const OrganizationServicesComponent: React.FC = () => {
  return (
    <>
      <article
        className="organization-services-component"
        id="about-organization"
      >
        <div className="organization-service">
          <h1>
            <CgWebsite />
          </h1>
          <h2>Frontend development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
        </div>
        <div className="organization-service">
          <h1>
            <FaDatabase />
          </h1>
          <h2>Database management</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
        </div>
        <div className="organization-service">
          <h1>
            <FaServer />
          </h1>
          <h2>Backend development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            omnis.
          </p>
        </div>
        <div className="organization-service">
          <h1>See All Services</h1>
          <button type="button">All Our Services</button>
        </div>
      </article>
    </>
  );
};

export default OrganizationServicesComponent;
