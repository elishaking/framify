import path from "path";
import sharp from "sharp";

import { ImagePayload, ImageModel } from "../models";
import { variables } from "../config/variables";

const frameImagePath = path.join(variables.rootDir, "images", "gold-frame.png");
const frameSize = {
  width: 736,
  height: 579,
};
const frameAspect = frameSize.width / frameSize.height;
const delta = 270;

export async function getAllImages() {
  return ImageModel.findAll();
}

export async function createImage(imagePayload: ImagePayload) {
  const resizeBuffer = await resizeImage(imagePayload);
  const rotateBuffer = await rotateImage(
    resizeBuffer,
    imagePayload.rotationAngle
  );
  const { width, height } = rotateBuffer.info;
  const now = Date.now();
  const outputInfo = await frameImage(now, width, height, rotateBuffer.data);

  const newImage = new ImageModel(
    `${variables.host}/images/image-${now}.png`,
    outputInfo.size,
    now
  );
  return newImage.save();
}

function resizeImage(imagePayload: ImagePayload) {
  return sharp(Buffer.from(imagePayload.dataUrl.split(";base64,")[1], "base64"))
    .resize(
      Math.ceil(imagePayload.size[0] * imagePayload.scale[0]),
      Math.ceil(imagePayload.size[1] * imagePayload.scale[1]),
      {
        fit: "fill",
      }
    )
    .toBuffer();
}

function rotateImage(resizeBuffer: Buffer, rotationAngle: number) {
  return sharp(resizeBuffer)
    .rotate(rotationAngle)
    .toBuffer({ resolveWithObject: true });
}

function frameImage(
  now: number,
  width: number,
  height: number,
  imageBuffer: Buffer
) {
  if (width > height) {
    frameSize.width = width + delta;
    frameSize.height = Math.ceil(frameSize.width / frameAspect);
  } else {
    frameSize.height = height + delta;
    frameSize.width = Math.ceil(frameSize.height * frameAspect);
  }

  const outputFilePath = path.join(
    variables.rootDir,
    "data",
    "output",
    `image-${now}.png`
  );

  return sharp(frameImagePath)
    .resize(frameSize.width, frameSize.height)
    .composite([{ input: imageBuffer }])
    .toFormat("png")
    .toFile(outputFilePath);
}
