import request from "supertest";
import app from "../../app";
import { addImagesTable } from "../../migrations/addImagesTable";

describe("Get Endpoints", () => {
  beforeAll((done) => {
    addImagesTable().then(() => done());
  });

  it("should get all framed images", async (done) => {
    const res = await request(app).get("/api/image");
    expect(res.status).toEqual(200);

    done();
  });

  it("should return a 404 status for non-existent route", async (done) => {
    const res = await request(app).get("/api/image/not-a-route");
    expect(res.status).toEqual(404);

    done();
  });
});

// describe("Post Endpoints", () => {});
