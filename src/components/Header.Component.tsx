import React, { useRef } from "react";

const HeaderComponent: React.FC = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <header className="header-component">
        <article className="header-component-content-wrapper">
          <h1>
            We are committed to making our clients{" "}
            <strong className="xtz">ideas</strong> and{" "}
            <strong className="xtz">dreams</strong> come to life.
          </h1>
          <p>
            Need of a website and you are uncertain of how to proceed, look no
            further and get the site of your dreams at lowest costs from
            experts.
          </p>
          <a href="/#organization-services-pricing">
            <button type="button" ref={buttonRef}>
              Get Started
            </button>
          </a>
        </article>
      </header>
    </>
  );
};

export default HeaderComponent;
