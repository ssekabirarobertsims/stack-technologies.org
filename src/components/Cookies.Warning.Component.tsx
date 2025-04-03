import React, { useRef } from "react";
import { BiCookie } from "react-icons/bi";
import RejectSiteCookies from "../functions/Reject.Cookies.Function";
import AllowSiteCookies from "../functions/Allow.Cookies.Function";

const CookiesWarningComponent: React.FunctionComponent<any> = (): any => {
  const buttonReference = useRef(null);

  return window.localStorage.getItem("cookies_enabled") ? (
    ""
  ) : (
    <>
      <aside
        className={String(
          "site-main-page-cookies-warning-component"
        ).toLocaleLowerCase()}
      >
        <article
          className={String(
            "site-main-page-cookies-warning-component-content-wrapper"
          ).toLocaleLowerCase()}
        >
          <h1>
            <BiCookie />
          </h1>
          <h2>Site Cookies Settings</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            voluptatibus itaque ad quaerat repudiandae dignissimos laudantium
            sunt nesciunt possimus exercitationem, molestias unde, expedita ut
            enim quae similique dolores. Facilis at temporibus minima
            blanditiis, corrupti perferendis tenetur dignissimos vitae ex
            quisquam aperiam veniam ipsum nesciunt.
          </p>
          <div>
            <button
              type="button"
              ref={buttonReference.current}
              onClick={(event) => {
                event.stopPropagation();
                AllowSiteCookies(
                  window.document.querySelector(
                    ".site-main-page-cookies-warning-component"
                  ) as HTMLElement
                );
              }}
            >
              Allow Cookies
            </button>
            <button
              type="button"
              ref={buttonReference.current}
              onClick={(event) => {
                event.stopPropagation();
                RejectSiteCookies(
                  window.document.querySelector(
                    ".site-main-page-cookies-warning-component"
                  ) as HTMLElement
                );
              }}
            >
              Reject Cookies
            </button>
          </div>
        </article>
      </aside>
    </>
  );
};

export default CookiesWarningComponent;
