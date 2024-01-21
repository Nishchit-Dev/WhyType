const convertCharsToWords = (CharArray = []) => {
  let resultArray = [];
  if (CharArray.length > 0) {
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
  return result;
};

const Algo = (Length, stats, IncorrectLetter = 0, TotalCharacter) => {
  // let totalWords = Length;
  // console.info("TotalChar", TotalCharacter);
  // console.info("TotalWords", Length);
  // console.info("TotalChar/words ", TotalCharacter / Length);
  // console.info("TotalErrors", IncorrectLetter);

  // console.info(
  //   "TotalChar/words - Erros ",
  //   TotalCharacter / Length - IncorrectLetter
  // );
  // console.info(
  //   "Accuracy: ",
  //   100 - (IncorrectLetter / TotalCharacter).toFixed(4) * 100
  // );
  // console.info("WPM: ", (IncorrectLetter / totalWords).toFixed(4) * 100);
  let Accuracy = 100 - (IncorrectLetter / TotalCharacter).toFixed(4) * 100;
  let minutesInSeconds = stats.timerCount / 60;

  let WPM = Length / minutesInSeconds;

  return { Accuracy, wpm: WPM };
};

export const result = (TypedLetterArray, stats, IncorrectLetter) => {
  let temp = TypedLetterArray.slice();
  let TotalCharacter = temp.length;
  let arr = convertCharsToWords(temp);

  let wpm = Algo(arr.length, stats, IncorrectLetter.length, TotalCharacter);
  console.log("wpm -> ", wpm);
  return wpm;
};
