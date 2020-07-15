import { ImageModel } from "../models";

export async function getAllImages() {
  return ImageModel.findAll();
}

export async function createImage() {
  return {};
}
