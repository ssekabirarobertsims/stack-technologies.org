import React from "react";

const LoaderComponent: React.FC = () => {
  return (
    <>
      <aside className="spinner-component-wrapper">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </aside>
    </>
  );
};

export default LoaderComponent;
