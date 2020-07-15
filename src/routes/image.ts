import express from "express";

export const imageRouter = express.Router();

imageRouter
  .get("/", (req, res) => {
    res.json({
      images: [],
    });
  })
  .post("/", (req, res) => {
    res.status(201).json({
      status: 201,
      message: "Image Framed and stored",
    });
  });
