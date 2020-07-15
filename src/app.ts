import express from "express";

import { imageRouter } from "./routes";

const app = express();

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Framify API",
  });
});

app.use("/image", imageRouter);

app.use((req, res) => {
  res.json({
    message: "Not Found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
