import { variables } from "../config/variables";

export function logError(err: any) {
  if (variables.env === "production") {
    // TODO: implement this
  } else {
    console.error(err);
  }
}
