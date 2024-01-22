import { paragraph } from "txtgen";

export const ConvertInToArray = (array) => {
  return [...array];
};

export function fillSpace(arr) {
  let newArray = arr.map((element) =>
    element === " " ? `\u2000` : element.toLowerCase()
  );

  return newArray;
}

export function keepOnlyAlphabetsAndSpace(charArray) {
  // Use a regular expression to filter out non-alphabetic characters and a specific Unicode character
  const onlyAlphabetsAndSpace = charArray.filter((char) =>
    /[a-zA-Z\u2000\s]/.test(char)
  );
  return onlyAlphabetsAndSpace;
}

export function SuperConvertorForArray(array) {
  let newArray = ConvertInToArray(array);
  newArray = keepOnlyAlphabetsAndSpace(newArray);
  return newArray;
}

export function GenerateSentence() {
  let _paragraph = paragraph(8);
  return SuperConvertorForArray(_paragraph);
}
