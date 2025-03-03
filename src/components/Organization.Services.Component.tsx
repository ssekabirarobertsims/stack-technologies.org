import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const OrganizationServicesComponent: React.FC = () => {
  return (
    <>
    <br />
      <article
        className="organization-services-component"
      >
        <div className="organization-service">
          <h1>
            <CgWebsite />
          </h1>
          <h2>Frontend development</h2>
          <p>
            We create responsive and user-friendly websites responsive iu designs that are easy to
            navigate for the user.
          </p>
        </div>
        <div className="organization-service">
          <h1>
            <FaDatabase />
          </h1>
          <h2>Database management</h2>
          <p>
            We manage databases and ensure that data is stored and retrieved
            efficiently and effectively.
          </p>
        </div>
        <div className="organization-service">
          <h1>
            <FaServer />
          </h1>
          <h2>Backend development</h2>
          <p>
            We develop server-side applications that are robust and scalable to
            meet the needs of your business.
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
