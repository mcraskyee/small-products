import React from "react";
import "./CourseCard.css";

const CourseCard = () => {
  const handleSubmit = () => {
    const courseName =
      document.getElementsByClassName("card-main-title")[0].innerText;
    alert(`Your application is submitted. Course Name: ${courseName}`);
  };

  return (
    <div className="card">
      <div className="card-top">
        <span class="card-top-icon material-symbols-outlined">rebase_edit</span>
        <div className="card-top-content">
          <h5 className="card-top-content-new">New</h5>
          <h6 className="card-top-content-online">ONLINE</h6>
        </div>
      </div>
      <div className="card-main">
        <h2 className="card-main-title">
          ES-111: Fundamentals of Electronic Systems
        </h2>
        <button className="card-main-button" onClick={handleSubmit}>
          Apply
        </button>
        <div className="card-main-bottom">
          <h3 className="card-main-bottom-price">$450.00</h3>
          <div className="card-main-bottom-context">
            <p className="card-main-bottom-context-language">EN</p>
            <p className="card-main-bottom-context-time">8h 00m</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-footer-type">Online</p>
      </div>
    </div>
  );
};

export default CourseCard;
