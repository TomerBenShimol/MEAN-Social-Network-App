const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sfvsdfbvsdfbsdfb",
      title: "First server post",
      content: "this is coming from the server",
    },
    {
      id: "sdfbv234345gertgs",
      title: "Second server post",
      content: "this is coming from the server!",
    },
  ];
  res.status(200).json({
    message: "Psots fetched succesfully!",
    posts: posts,
  });
});

module.exports = app;
