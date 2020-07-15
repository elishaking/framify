import { Database } from "sqlite3";
import { variables } from "../config/variables";

export const db = new Database(variables.dbPath);
