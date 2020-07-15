import { db } from "./db";

export interface ImagePayload {
  dataUrl: string;
  size: number[];
  rotationAngle: number;
  scale: number[];
}

interface ImageData {
  imageUrl: string;
  size: number;
  date: number;
}

export class ImageModel {
  constructor(
    public url: string,
    public size: number,
    public date: number,
    public id?: string
  ) {}

  static findAll(): Promise<ImageData[]> {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM images", (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
    });
  }
}
