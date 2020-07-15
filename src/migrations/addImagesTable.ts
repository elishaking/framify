import { Database } from "sqlite3";
import { variables } from "../config/variables";

const db = new Database(variables.dbPath);

export const addImagesTable = () => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS images (
          id INTEGER PRIMARY KEY,
          imageUrl TEXT NOT NULL,
          size INTEGER NOT NULL,
          date INTEGER NOT NULL
      );`,
      (err) => {
        if (err) {
          reject(err);
        }
        db.close();
        resolve();
      }
    );
  });
};
