export interface AlternatingCaseOptions {
  start?: "upper" | "lower";
}

export function alternatingCase(
  text: string,
  options: AlternatingCaseOptions = {},
): string {
  let makeUpper = options.start !== "lower";

  return text
    .split("")
    .map((char) => {
      if (char.toLowerCase() !== char.toUpperCase()) {
        const out = makeUpper ? char.toUpperCase() : char.toLowerCase();
        makeUpper = !makeUpper;
        return out;
      }
      return char;
    })
    .join("");
}

export default alternatingCase;
