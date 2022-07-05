import buildLine from "./buildLine";

const diamond = (dimension: number): string[] | "invalid_dimension" => {
  if (dimension % 2 === 0) return "invalid_dimension";
  const lines = [];

  for (let i = 0; i < dimension; i += 1) {
    lines.push(buildLine(i, dimension));
  }
  return lines;
};

export default diamond;
