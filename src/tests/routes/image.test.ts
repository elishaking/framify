import request from "supertest";
import app from "../../app";

describe("Get Endpoints", () => {
  it("should get all framed images", async (done) => {
    const res = await request(app).get("/api/image");
    console.log(res.body);
    expect(res.status).toEqual(200);

    done();
  });
});
