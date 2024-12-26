import { helloDocker } from "./server";

describe("helloDocker", () => {
  it("should return 'Hello, Docker World 12 !'", () => {
    const result = helloDocker();
    expect(result).toBe("Hello, Docker World 12 !\n");
  });
});