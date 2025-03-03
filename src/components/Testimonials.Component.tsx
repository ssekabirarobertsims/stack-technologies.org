import React from "react";

const TestimonialsComponent: React.FC = () => {
  return (
    <>
      <article className="testimonials-component" id="clients-testimonials">
        <h1>Testimonials From Clients</h1>
        <div className="testimonials-component-content">
          <article>
            <div className="wrapper">
              <div className="testimonial-client-content">
                <img
                  src="/photos/beautiful-african-american-woman-cafe_273609-5291.jpg"
                  alt=""
                />
                <aside>
                  <span>Lira Johns</span>
                  <span>Stack Technologies Client</span>
                </aside>
              </div>
              <div className="testimonial-content">
                <p>
                  I am very happy with the services provided by Stack
                  Technologies. They have been very professional and have
                  delivered the best results for my business needs and
                  requirements. I would definitely recommend Stack Technologies
                  to anyone looking for a reliable and professional web
                  development company to work with.
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className="wrapper">
              <div className="testimonial-client-content">
                <img src="/photos/peter-donalds.jpg" alt="" />
                <aside>
                  <span>Peter Donald</span>
                  <span>Stack Technologies Client</span>
                </aside>
              </div>
              <div className="testimonial-content">
                <p>
                 Stack Technologies has been a great partner for my business. They
                 have been very professional and have delivered the best results
                  for my business needs and requirements. I would definitely
                  recommend Stack Technologies to anyone looking for a reliable
                  and professional web development company to work with.
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </>
  );
};

export default TestimonialsComponent;
