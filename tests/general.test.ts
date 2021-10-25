const request = require("supertest");
import app from "../src/app";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World!')
  });
});
