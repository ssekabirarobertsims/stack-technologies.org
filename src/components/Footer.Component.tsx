import React from "react";
import { format } from "date-fns";
type Date = string;
import { IoLocation } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const FooterComponent: React.FC = () => {
  const date: Date = format(new Date(), "yyyy") as string;

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <footer className="footer-component" id="organization-legal-information">
        <article className="footer-component-content">
          <article className="footer-component-content-wrapper">
            <h1>Details</h1>
            <p>
              We specialize in building high-quality websites, web apps, and
              digital solutions to help businesses thrive online. We also handle
              database management and backend development for backend services
              and secure web APIs. Site developed with <BiHeart /> by{" "}
              <a href="https://robertsims.netlify.app/" target="_blank">
                ssekabira robert sims
              </a>{" "}
              and the team at stack technologies organization.
            </p>
            <ul className="socials">
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </article>
          <article className="footer-component-content-wrapper">
            <h1>Information</h1>
            <ul className="links">
              <a href="/#organization-developers-team">
                <li>Team</li>
              </a>
              <Link
                to={{
                  pathname: "",
                }}
              >
                <li>Projects</li>
              </Link>
              <a href="/#organization-services-pricing">
                <li>Pricing</li>
              </a>
              <Link
                to={{
                  pathname: "",
                }}
              >
                <li>Sponsors</li>
              </Link>
              <a href="/#about-organization">
                <li>About</li>
              </a>
              <Link
                to={{
                  pathname: "",
                }}
              >
                <li>Privacy & Policy</li>
              </Link>
            </ul>
          </article>
          <article className="footer-component-content-wrapper">
            <h1>Contact</h1>
            <ul className="contacts">
              <li>
                <IoLocation /> Kampala, Uganda
              </li>
              <li>
                <MdAddCall /> + 256 759 714 4193
              </li>
              <li>
                <MdOutlineEmail /> support@gmail.com
              </li>
              <li>
                <MdOutlineEmail /> robertsims7076@gmail.com
              </li>
            </ul>
          </article>
        </article>
        <article className="footer-component-copyright">
          <span>
            stack technologies &copy;right 2023-{date as string} all rights
            reserved
          </span>
        </article>
      </footer>
    </>
  );
};

export default FooterComponent;
