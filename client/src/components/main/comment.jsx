import React, { useEffect, useState } from "react";
import "./comment.css";

const CommentBox = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
    console.log("All comments:", storedComments); // Log all comments fetched from localStorage
    setComments(storedComments);
  }, [postId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = event.target.elements.comment.value;
    const updatedComments = [...comments, newComment]; // Concatenate new comment to existing comments
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
    event.target.elements.comment.value = "";
  };
  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };
  // Clear the input field after posting

  return (
    <div className="comment-box">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            {comment}{" "}
            {/* <FontAwesomeIcon
              icon={faTrashCan}
              className="delete"
              onClick={handleDeleteComment(index)}
            />  */}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a comment" name="comment" />
        <button type="submit">POST</button>
      </form>
    </div>
  );
};
export default CommentBox;
