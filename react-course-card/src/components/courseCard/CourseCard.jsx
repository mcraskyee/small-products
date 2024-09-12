import React, { useState } from "react";
import "./CourseCard.css";

const CourseCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState("");
  const [applyCount, setApplyCount] = useState(0);

  const isCompletedBtnText =
    props.isCompleted === true ? "Review Now!" : "Study Now!";

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (comment.trim() === "") {
      alert("Please add your comment.");
      return;
    }
    alert(`Your comment: "${comment}" about ${props.title} is submitted.`);
    setIsSubmitted(!isSubmitted);
    setComment("");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleApplyCount = () => {
    setApplyCount(applyCount + 1);
  };

  const changeFooterColor = () => {
    const difficulty = props.difficulty;
    if (difficulty === "Elementary") {
      return "hsl(0,100%,80%)";
    } else if (difficulty === "Intermediate") {
      return "hsl(0,50%,40%)";
    } else {
      return "hsl(0, 20%, 20%)";
    }
  };

  return (
    <div className="card">
      <div className="card-top" style={{ backgroundColor: props.cardTopColor }}>
        <span class="card-top-icon material-symbols-outlined">
          {props.icon}
        </span>
        <div className="card-top-content">
          <h5 className="card-top-content-online">ONLINE</h5>
          <h6 className="card-top-content-applies">{`${applyCount} Applied`}</h6>
        </div>
      </div>
      <div className="card-main">
        <h2 className="card-main-title">{props.title}</h2>
        <button className="card-main-button" onClick={handleApplyCount}>
          {isCompletedBtnText}
        </button>
        <button className="card-main-button" onClick={handleChangeVisible}>
          Comment
        </button>
        <div className="card-main-bottom">
          <h3 className="card-main-bottom-price">{`$${props.price}`}</h3>
          <div className="card-main-bottom-context">
            <p className="card-main-bottom-context-language">EN</p>
            <p className="card-main-bottom-context-time">{`${props.duration} Totally`}</p>
          </div>
        </div>
      </div>
      <div
        className="card-footer"
        style={{ backgroundColor: changeFooterColor() }}
      >
        <p className="card-footer-difficulty">{props.difficulty}</p>
      </div>
      {isVisible && (
        <div className="card-comment-visible">
          <textarea
            className="card-comment-content"
            placeholder="No more than 100 words"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            className="card-comment-submit"
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
