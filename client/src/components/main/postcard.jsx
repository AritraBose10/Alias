import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./postcard.css";
function Postcard({ onSubmit }) {
  // Function to handle form submission
  const [inputText, setInputText] = useState("");
  const handleSubmit = () => {
    onSubmit(inputText);

    setInputText("");
  };
  return (
    <>
      <div className="container">
        <button type="submit" id="submit" onClick={handleSubmit}>
          POST
        </button>
        <input
          type="text"
          id="post"
          placeholder="What's on your mind"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="icons">
          <i className="fa fa-camera-retro" aria-hidden="true">
            <FontAwesomeIcon icon={faCameraRetro} />
            Photo
          </i>
          <i className="fa fa-camera-retro" aria-hidden="true">
            <FontAwesomeIcon icon={faCameraRetro} />
            Poll
          </i>
          <i className="fa fa-camera-retro" aria-hidden="true">
            <FontAwesomeIcon icon={faCameraRetro} />
            Random
          </i>
        </div>
      </div>
    </>
  );
}

export default Postcard;
