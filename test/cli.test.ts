import { describe, it, expect } from "vitest";
import { execSync } from "node:child_process";
import path from "node:path";

const CLI = path.resolve("dist/esm/cli.js");

describe("CLI", () => {
  it("prints help", () => {
    const output = execSync(`node ${CLI} --help`).toString();
    expect(output).toContain("Usage:");
  });

  it("prints version", () => {
    const output = execSync(`node ${CLI} --version`).toString();
    expect(output.trim()).toMatch(/^\d+\.\d+\.\d+/);
  });

  it("alternates text", () => {
    const output = execSync(`node ${CLI} "Hello World!!!"`).toString().trim();

    expect(output).toBe("HeLlO wOrLd!!!");
  });

  it("respects --start lower", () => {
    const output = execSync(`node ${CLI} --start lower "hello"`)
      .toString()
      .trim();

    expect(output).toBe("hElLo");
  });

  it("reads from stdin", () => {
    const output = execSync(`echo "hello" | node ${CLI}`).toString().trim();

    expect(output).toBe("HeLlO");
  });
});
