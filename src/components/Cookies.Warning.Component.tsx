import React from "react";

const CookiesSiteMessageComponent: React.FunctionComponent = () => {
  return !document.cookie.includes("cookies-accepted") ? (
    <aside className="cookies-site-message-component">
      <div>
        <p>
          This site uses cookies. By continuing to use this it, you agree
          to their use and privacy in your browser and operation to enhance performance!
        </p>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault(); // prevent event bubbling
            // Logic to accept cookies
            console.log("Cookies accepted");
            // You can also set a cookie here to remember the user's choice
            document.cookie = "cookies-accepted=true; path=/; max-age=31536000"; // 1 year
            // remove component after button click
            if ((event.target as HTMLButtonElement).click) (window.document.querySelector(
                  ".cookies-site-message-component"
                ) as HTMLElement).style.display = "none";
            else return;
          }}
        >
          Accept
        </button>
      </div>
    </aside>
  ) : null;
  // If cookies are not accepted, you can show a message or do nothing
};

export default CookiesSiteMessageComponent;
