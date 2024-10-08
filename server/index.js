require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Post = require("./models/post");

const corsOptions = {
  origin: ["http://localhost:5173", "https://alias-guk3.onrender.com/"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
// database connection
connection();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/posts/:postId/like", async (req, res) => {
  console.log(req.params);
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ likeCount: post.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to like/unlike a post
app.post("/api/posts/:postId/like", async (req, res) => {
  const postId = req.params.postId;
  const action = req.body.action; // 'like' or 'unlike'
  try {
    let post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (action === "like") {
      post.likes++;
    } else if (action === "unlike") {
      post.likes = Math.max(0, post.likes - 1); // Ensure likes never go below 0
    }
    await post.save();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
