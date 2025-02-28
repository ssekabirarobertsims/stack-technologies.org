import React from "react";

const ServicesPricingPlansComponent: React.FC = () => {
  return (
    <>
      <aside className="organization-services-pricing-page-component-content">
        <span className="span" id="organization-services-pricing">
          Pricing Plan
        </span>
        <h1 id="osp">Choose the right plan for your business</h1>
        <p id="osw">
          We offer tailored web development services, including design,
          development, SEO, and maintenance. Choose from flexible plans—Basic,
          Standard, or Premium—to fit your business needs. Get started today!
        </p>
        <div className="pricing-tags-wrapper">
          <article className="pricing-tag">
            <div className="pricing-tag-wrapper">
              <h1>Backend Development</h1>
              <h1>$2000.0/Site</h1>
              <p> </p>
              <ul>
                <li>Custom Design</li>
                <li>Response Caching</li>
                <li>10-20 routes & routers</li>
                <li>Support & Maintenance</li>
                <li>1 month free for updates</li>
              </ul>
              <p> </p>
              <a href="mailto:robertsims7076@gmail.com">
                <button type="button">Get Started With Plan</button>
              </a>
            </div>
          </article>
          <article className="pricing-tag" id="middle-pricing-tag">
            <div className="pricing-tag-wrapper">
              <h1>Frontend Development</h1>
              <h1>$999.9/Site</h1>
              <p> </p>
              <ul>
                <li>Custom Design</li>
                <li>Responsive Layout</li>
                <li>SEO Optimization</li>
                <li>5-7 Pages Included</li>
                <li>Support & Maintenance</li>
                <li>5 months free for updates</li>
              </ul>
              <p> </p>
              <a href="mailto:robertsims7076@gmail.com">
                <button type="button">Get Started With Plan</button>
              </a>
            </div>
          </article>
          <article className="pricing-tag">
            <div className="pricing-tag-wrapper">
              <h1>Database Management</h1>
              <h1>$1200.0/Site</h1>
              <p> </p>
              <ul>
                <li>Custom DB Designs</li>
                <li>Proper Data Management</li>
                <li>End To End Data Security</li>
                <li>Support & Maintenance</li>
                <li>2 months free for management</li>
              </ul>
              <p> </p>
              <a href="mailto:robertsims7076@gmail.com">
                <button type="button">Get Started With Plan</button>
              </a>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
};

export default ServicesPricingPlansComponent;
