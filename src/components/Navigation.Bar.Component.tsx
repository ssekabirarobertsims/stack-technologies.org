import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

interface ListItem {
  id: string;
  value: string;
  href: string;
  element?: unknown;
}

import DropDownMenuComponent from "./DD.Menu.Component";

const NavigationBarComponent: React.FC = () => {
  const ulRef = useRef(null);
  const buttonRef = useRef(null);

  const [list, setList] = useState<ListItem[]>([
    {
      id: uuid() as string,
      value: "Home" as string,
      href: "/#" as string,
    },
    {
      id: uuid() as string,
      value: "About" as string,
      href: "/#about-organization" as string,
    },
    {
      id: uuid() as string,
      value: "Team" as string,
      href: "/#organization-developers-team" as string,
    },
    {
      id: uuid() as string,
      value: "Pricing" as string,
      href: "/#organization-services-pricing" as string,
    },
    {
      id: uuid() as string,
      value: "Testimonials" as string,
      href: "/#clients-testimonials" as string,
    },
    {
      id: uuid() as string,
      value: "Contact" as string,
      href: "/#organization-legal-information" as string,
    },
  ] as ListItem[]);

  useEffect(() => {
    setList(list);
  }, [list]);

  return (
    <>
      <nav className="navigation-bar-component">
        <div className="navigation-bar-component-wrapper">
          <Link
            to={{
              pathname: "/",
            }}
            id="logo"
          >
            stack tech
          </Link>
          <ul className="" id="" ref={ulRef}>
            {list.map((element: ListItem) => (
              <a href={element.href as string} key={element.id as string}>
                <li key={element.id as string}>{element.value}</li>
              </a>
            ))}
          </ul>
          <a
            href="/#organization-services-pricing"
            id="nav-bar-pricing-button-wrapper"
          >
            <button
              type="button"
              id="nav-bar-pricing-button"
              ref={buttonRef.current}
            >
              See Pricing
            </button>
          </a>
          <DropDownMenuComponent />
        </div>
      </nav>
    </>
  );
};

export default NavigationBarComponent;
