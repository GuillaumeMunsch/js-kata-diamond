const computeStarsNumber = (value: number, dimension: number) => {
  const equivalentTopHalfIndex = dimension / 2 >= value ? value : dimension - value - 1;
  return equivalentTopHalfIndex * 2 + 1;
};

const generateCharacters = (character: " " | "*", amount: number): string => new Array(amount).fill(character).join("");

const buildLine = (index: number, dimension: number): string => {
  const lineArray = [];

  const starsNumber = computeStarsNumber(index, dimension);

  lineArray.push(generateCharacters(" ", (dimension - starsNumber) / 2));
  lineArray.push(generateCharacters("*", starsNumber));
  const line = lineArray.join("");
  return line;
};

export default buildLine;
