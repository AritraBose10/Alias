import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faComment,
  faHeart as faHeartSolid,
  faRetweet,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import CommentBox from "./comment"; // Import the CommentBox component
import "./post.css";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false); // State to track visibility of comment box
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${props.id}`)) || [];
    setCommentCount(storedComments.length);
  }, [props.id]);

  // Load like status and count from local storage on component mount
  useEffect(() => {
    const postLikes = JSON.parse(localStorage.getItem(props.id)) || {
      liked: false,
      count: 0,
    };
    setIsLiked(postLikes.liked);
    setLikeCount(postLikes.count);
  }, [props.id]);

  // Function to handle like/unlike action
  const handleLike = () => {
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    // Update local storage for this post only
    localStorage.setItem(
      props.id,
      JSON.stringify({ liked: !isLiked, count: newLikeCount })
    );
    // Update state
    setIsLiked(!isLiked);
    setLikeCount(newLikeCount);
  };

  // Function to toggle visibility of comment box
  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };
  const handleDelete = () => {
    props.onDelete(props.id); // Call the onDelete function with the post ID
  };

  return (
    <div className="post">
      <div className="header">
        <FontAwesomeIcon
          icon={faTrash}
          className="delete"
          onClick={handleDelete}
        />
        <img
          className="pp"
          alt="Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
        />
        <p className="username">@the_aritrabose</p>
        <p className="name">Aritra Bose</p>
        <p className="time">Just Now</p>
      </div>

      <div className="content">
        <p>{props.content}</p>
      </div>

      <div className="footer">
        <div className="buttons">
          {/* Like button */}
          <button className="button" onClick={handleLike}>
            <FontAwesomeIcon
              icon={isLiked ? faHeartSolid : faHeartRegular}
              color={isLiked ? "darkred" : "black"}
            />
            <span className="like-count">{likeCount}</span>
          </button>
          {/* Comment button */}
          <button className="button" onClick={toggleCommentBox}>
            <FontAwesomeIcon icon={faComment} />
            <span className="comment-count">{commentCount}</span>
          </button>

          {/* Share button */}
          <button className="button">
            <FontAwesomeIcon icon={faShare} />
          </button>
          {/* Retweet button */}
          <button className="button">
            <FontAwesomeIcon icon={faRetweet} />
          </button>
        </div>
      </div>

      {/* Conditional rendering of CommentBox component */}
      {showCommentBox && (
        <CommentBox postId={props.id} onClose={toggleCommentBox} />
      )}
      {showCommentBox && <div className="overlay" onClick={toggleCommentBox} />}
    </div>
  );
}

export default Post;
