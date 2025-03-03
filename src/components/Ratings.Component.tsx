import React from "react";
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const OrganizationRatingsComponent: React.FC = () => {
  return (
    <>
      <article className="organization-ratings-component">
        <span className="span">Organization Ratings</span>
        <h1>Ratings From Clients!</h1>
        <p>
          We have been in the industry for over 4 years and have worked with
          over 45 clients to deliver the best results possible for their
          business needs and requirements with our team of 24 developer
          experts.
        </p>
        <div className="organization-ratings-component-content">
          <span>
            <strong>
              <BsStarFill />
            </strong>
          </span>
          <span>
            <strong>
              <BsStarFill />
            </strong>
          </span>
          <span>
            <strong>
              <BsStarFill />
            </strong>
          </span>
          <span>
            <strong>
              <BsStarFill />
            </strong>
          </span>
          <span>
            <BiStar />
          </span>
        </div>
      </article>
    </>
  );
};

export default OrganizationRatingsComponent;
