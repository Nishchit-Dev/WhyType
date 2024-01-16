const convertCharsToWords = (CharArray = []) => {
  if (CharArray.length > 0) {
    let resultArray = [];
    let currentWord = "";

    for (let char of CharArray) {
      if (char === " " || char === "\u2000") {
        // If a space is encountered, push the current word to the result array
        resultArray.push(currentWord);
        currentWord = ""; // Reset the current word for the next word
      } else {
        // Concatenate characters to form the current word
        currentWord += char;
        // if (currentWord !== "") {
        //   resultArray.push(currentWord);
        //   currentWord = ""; // Reset the current word for the next word
        // }
      }
    }
    if (currentWord.trim() !== "") {
      resultArray.push(currentWord.trim());
    }
    // Push the last word if it exists (after the last space)
    return resultArray;
  }
};

const Algo = (Length, stats) => {
  let totalWords = Length;
  console.log(totalWords);
  let minutesInSeconds = (stats.ActiveFor + 1) / 60;
  console.log(minutesInSeconds);

  let wpm = totalWords / minutesInSeconds;
  console.log(wpm);

  return wpm;
};

export const result = (TypedLetterArray, stats) => {
  console.log(stats);
  let temp = TypedLetterArray.slice();
  let arr = convertCharsToWords(temp);
  console.log(arr);
  const wpm = Algo(arr.length, stats);
  console.log("wpm -> ", wpm);
  return wpm;
};
