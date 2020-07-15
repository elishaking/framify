import express from "express";

import { getAllImages, createImage } from "../services";
import { ErrorResponse, DataResponse } from "../utils";

export const imageRouter = express.Router();

imageRouter
  .get("/", (req, res) => {
    getAllImages()
      .then((images) => {
        res.status(200).json(new DataResponse(200, images));
      })
      .catch((err) => {
        res
          .status(500)
          .json(new ErrorResponse(500, err.message || "Something went wrong"));
      });
  })
  .post("/", (req, res) => {
    const { imagePayload } = req.body;

    createImage(imagePayload)
      .then((image) => {
        res
          .status(201)
          .json(new DataResponse(201, image, "Image Framed and stored"));
      })
      .catch((err) => {
        res
          .status(500)
          .json(new ErrorResponse(500, err.message || "Something went wrong"));
      });
  });
