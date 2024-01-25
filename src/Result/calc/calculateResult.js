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
  let Accuracy = 100 - (IncorrectLetter / TotalCharacter).toFixed(4) * 100;
  let minutesInSeconds = stats.timerCount / 60;

  let WPM = Length / minutesInSeconds;

  return { Accuracy, wpm: WPM };
};
export const calculateTimeDifferences = (timestamps = []) => {
  if (timestamps.length == 0) return;
  const differences = [];
  for (let i = 0; i < timestamps.length - 1; i++) {
    const timeDiff = timestamps[i + 1].data - timestamps[i].data;
    differences.push(timeDiff / 1000);
  }
  console.log(differences);
  return differences;
};

export const result = (TypedLetterArray, stats, IncorrectLetter) => {
  let temp = TypedLetterArray.slice();
  let TotalCharacter = temp.length;
  let arr = convertCharsToWords(temp);

  let wpm = Algo(arr.length, stats, IncorrectLetter.length, TotalCharacter);
  console.log("wpm -> ", wpm);
  return wpm;
};

export const AvgTimePerChar = (charTimer = []) => {
  console.log(charTimer)
  if (charTimer.length == 0) return 0;
  let AvgTime = 0;
  charTimer.forEach((time) => {
    AvgTime += time;
  });
  AvgTime = AvgTime / charTimer.length;
  return AvgTime.toFixed(2);
};
