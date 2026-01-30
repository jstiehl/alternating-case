import { describe, it, expect } from "vitest";
import { alternatingCase } from "../src/index";

describe("alternatingCase", () => {
  it("alternates letters and ignores punctuation", () => {
    expect(alternatingCase("donald can't do that!!!")).toBe(
      "DoNaLd CaN't Do ThAt!!!",
    );
  });
});
