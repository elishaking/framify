import express from "express";

import { getAllImages, createImage } from "../services";

export const imageRouter = express.Router();

imageRouter
  .get("/", (req, res) => {
    res.json({
      images: getAllImages(),
    });
  })
  .post("/", (req, res) => {
    res.status(201).json({
      status: 201,
      message: "Image Framed and stored",
      image: createImage(),
    });
  });
