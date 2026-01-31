import { describe, it, expect } from "vitest";
import { alternatingCase } from "../src/index";

describe("alternatingCase", () => {
  it("alternates letters and ignores punctuation", () => {
    expect(alternatingCase("Hello World!!!")).toBe("HeLlO wOrLd!!!");
  });
});
