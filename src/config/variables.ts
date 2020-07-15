import path from "path";

type Env = "development" | "production";
const env: Env = process.env.NODE_ENV as Env;
const port = process.env.PORT || 3000;

export const variables = {
  env,
  port,
  dbPath: "data/db.sqlite3",
  host:
    env === "production"
      ? "https://some.prod.url.com" // TODO: change this
      : `http://localhost:${port}`,
  rootDir: path.join(path.dirname(path.dirname(__dirname))),
};
