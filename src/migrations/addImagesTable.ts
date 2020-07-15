import { Database } from "sqlite3";

const db = new Database("data/db.sqlite3");

export const addImagesTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY,
        imageUrl TEXT NOT NULL,
        size INTEGER NOT NULL,
        date INTEGER NOT NULL
    );`,
    (err) => {
      if (err) {
        console.error(err);
      }
      db.close();
    }
  );
};
