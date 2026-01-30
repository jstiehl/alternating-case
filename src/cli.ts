#!/usr/bin/env node
import { alternatingCase } from "./index.js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

function getVersion(): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Go one level up from dist/esm/cli.js to project root
  const pkgPath = path.resolve(__dirname, "../../package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  return pkg.version;
}

function printHelp() {
  console.log(
    `
Usage:
  alternating-case [options] <text>
  echo <text> | alternating-case [options]

Options:
  -h, --help           Show help
  -v, --version        Show version
  --start <upper|lower>
                       Starting case (default: upper)

Examples:
  alternating-case "hello world"
  alternating-case --start lower "hello world"
  echo "hello world" | alternating-case
`.trim(),
  );
}

function readStdin(): Promise<string> {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => resolve(data.trim()));
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    process.exit(0);
  }

  if (args.includes("--version") || args.includes("-v")) {
    console.log(getVersion());
    process.exit(0);
  }

  let start: "upper" | "lower" = "upper";
  const startIndex = args.indexOf("--start");

  if (startIndex !== -1) {
    const value = args[startIndex + 1];
    if (value !== "upper" && value !== "lower") {
      console.error("Error: --start must be 'upper' or 'lower'");
      process.exit(2);
    }
    start = value;
    args.splice(startIndex, 2);
  }

  const input = args.length > 0 ? args.join(" ") : await readStdin();

  if (!input) {
    console.error("Error: no input provided");
    process.exit(1);
  }

  console.log(alternatingCase(input, { start }));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
