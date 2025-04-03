import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

interface ListItem {
  id: string;
  value: string;
  href: string;
  element?: unknown;
}

import CloseDropDownMenu from "../functions/Close.Dd.Menu.Function";
import OpenDropDownMenu from "../functions/Open.Dd.Menu.Function";
import { BiMenu } from "react-icons/bi";

const DropDownMenuComponent: React.FunctionComponent = () => {
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
      <div className="dd-menu" onClick={(event) => {
        if(event.currentTarget.matches(".close-menu-button")) {
          console.log("te")
        }
      }}>
        <button
          type="button"
          className="dd-menu-button"
          onClick={(event) => {
            event.stopPropagation();
            OpenDropDownMenu();
          }}
        >
          <BiMenu onClick={(event) => {
            event.stopPropagation();
            OpenDropDownMenu();
          }} className="sample" />
        </button>
        <aside className="dd-menu-wrapper">
          <article className="dd-menu-content">
            <div className="dd-menu-content-wrapper">
              <ul className="" id="" ref={ulRef}>
                {list.map((element: ListItem) => (
                  <a href={element.href as string} key={element.id as string}>
                    <li key={element.id as string}>{element.value}</li>
                  </a>
                ))}
              </ul>
              <button type="button" onClick={CloseDropDownMenu} ref={buttonRef} className="close-menu-button">
                Close Menu
              </button>
            </div>
          </article>
        </aside>
      </div>
    </>
  );
};

export default DropDownMenuComponent;
