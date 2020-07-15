import { Database } from "sqlite3";
import { variables } from "../config/variables";

console.log(variables.env);

export const db = new Database(variables.dbPath);
