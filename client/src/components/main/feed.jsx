import React, { useEffect, useState } from "react";
import "./feed.css";
import Post from "./post";
import Postcard from "./postcard";

const generatePostId = () => {
  const timestamp = Date.now(); // Get current timestamp
  const random = Math.random().toString(36).substring(2, 8); // Generate random string
  return `${timestamp}_${random}`;
};
function Feed() {
  // State to hold the posts
  const [posts, setPosts] = useState([]);

  // Function to handle submission of post content
  const handleSubmit = (postContent) => {
    const postId = generatePostId();

    // Create a new post object containing postId and postContent
    const newPost = { id: postId, content: postContent };

    // Add new post to the beginning of the posts array
    setPosts([newPost, ...posts]);
  };

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  // Update localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  function deletePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  return (
    <div className="feed">
      <div className="feed-content">
        {/* Render all posts */}
        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            id={post.id}
            onDelete={deletePost}
          />
        ))}
        {/* Render Postcard to submit new post */}
        <Postcard onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Feed;
