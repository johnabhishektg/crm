import React from "react";

const Stars = ({ stars }) => {
  return (
    <div className="star-status">
      <span
        className={stars <= 1 ? "fa fa-star " : "fa fa-star checked"}
      ></span>
      <span className={stars <= 2 ? "fa fa-star" : "fa fa-star checked"}></span>
      <span className={stars <= 3 ? "fa fa-star" : "fa fa-star checked"}></span>
      <span className={stars <= 4 ? "fa fa-star" : "fa fa-star checked"}></span>
      <span className={stars <= 5 ? "fa fa-star" : "fa fa-star checked"}></span>
    </div>
  );
};

export default Stars;
