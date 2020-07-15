import express from "express";

import { getAllImages, createImage } from "../services";
import { ErrorResponse } from "../utils";

export const imageRouter = express.Router();

imageRouter
  .get("/", (req, res) => {
    getAllImages()
      .then((images) => {
        res.json({
          images,
        });
      })
      .catch((err) => {
        res.json(new ErrorResponse(500, err.message || "Something went wrong"));
      });
  })
  .post("/", (req, res) => {
    res.status(201).json({
      status: 201,
      message: "Image Framed and stored",
      image: createImage(),
    });
  });
