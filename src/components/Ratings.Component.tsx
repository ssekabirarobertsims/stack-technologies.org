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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          pariatur beatae dolores veniam praesentium laboriosam quod,
          dignissimos voluptates maiores maxime!
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
