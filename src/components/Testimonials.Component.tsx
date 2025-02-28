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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  reiciendis cupiditate quam, voluptate, dicta excepturi illum
                  perspiciatis soluta amet modi expedita architecto eius quod!
                  Qui pariatur accusamus hic harum maiores ipsam ea cum
                  veritatis libero iure laboriosam sapiente facere est
                  voluptatum ex ab quidem ad labore amet sed eos, sunt odit
                  totam. Vero vel cum laboriosam eum illum pariatur eaque?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  reiciendis cupiditate quam, voluptate, dicta excepturi illum
                  perspiciatis soluta amet modi expedita architecto eius quod!
                  Qui pariatur accusamus hic harum maiores ipsam ea cum
                  veritatis libero iure laboriosam sapiente facere est
                  voluptatum ex ab quidem ad labore amet sed eos, sunt odit
                  totam. Vero vel cum laboriosam eum illum pariatur eaque?
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
