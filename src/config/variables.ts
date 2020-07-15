import path from "path";

type Env = "development" | "production" | "test";
const env: Env = process.env.NODE_ENV as Env;
const port = process.env.PORT || 7000;

export const variables = {
  env,
  port,
  dbPath: env === "test" ? "data/db.test.sqlite3" : "data/db.sqlite3",
  host:
    env === "production"
      ? "https://some.prod.url.com" // TODO: change this
      : `http://localhost:${port}`,
  rootDir: path.join(path.dirname(path.dirname(__dirname))),
};
