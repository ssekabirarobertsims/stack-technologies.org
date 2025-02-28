import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const OrganizationDevelopersComponent: React.FC = () => {
  return (
    <>
      <section
        className="organization-developers-section-component"
        id="organization-developers-team"
      >
        <div className="organization-developers-section-component-content-wrapper">
          <h1>Meet The Team</h1>
          <br />
          <div className="developers-cards-wrapper">
            <article>
              <img src="/photos/dev-1.jpg" alt="" />
              <aside>
                <div className="wrapper">
                  <h1>Lisa Roberts</h1>
                  <p>UI/UX Designer</p>
                  <ul>
                    <a href="https://www.github.com" target="_blank">
                      <li>
                        <FaGithub />
                      </li>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <li>
                        <FaLinkedin />
                      </li>
                    </a>
                  </ul>
                </div>
              </aside>
            </article>
            <article>
              <img src="/photos/dev-2.jpg" alt="" />
              <aside>
                <div className="wrapper">
                  <h1>Robert Sims</h1>
                  <p>Software Engineer</p>
                  <ul>
                    <a
                      href="https://www.github.com/testgithubrobert"
                      target="_blank"
                    >
                      <li>
                        <FaGithub />
                      </li>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/robertsims5"
                      target="_blank"
                    >
                      <li>
                        <FaLinkedin />
                      </li>
                    </a>
                  </ul>
                </div>
              </aside>
            </article>
            <article>
              <img src="/photos/dev-3.jpg" alt="" />
              <aside>
                <div className="wrapper">
                  <h1>Isaac Momo</h1>
                  <p>Senior Backend Developer</p>
                  <ul>
                    <a href="https://www.github.com" target="_blank">
                      <li>
                        <FaGithub />
                      </li>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <li>
                        <FaLinkedin />
                      </li>
                    </a>
                  </ul>
                </div>
              </aside>
            </article>
            <article>
              <img src="/photos/dev-4.jpg" alt="" />
              <aside>
                <div className="wrapper">
                  <h1>Monica Stephen</h1>
                  <p>Frontend Developer</p>
                  <ul>
                    <a href="https://www.github.com" target="_blank">
                      <li>
                        <FaGithub />
                      </li>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <li>
                        <FaLinkedin />
                      </li>
                    </a>
                  </ul>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizationDevelopersComponent;
