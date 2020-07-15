import path from "path";
import express from "express";
import helmet from "helmet";

import { imageRouter } from "./routes";
import { variables } from "./config/variables";

const app = express();

// TODO: setup cors for prod

// add security
app.use(helmet());

// parse request body
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(
  "/images",
  express.static(path.join(variables.rootDir, "data", "output"))
);

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

const PORT = variables.port;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
