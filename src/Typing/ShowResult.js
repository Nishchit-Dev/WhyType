import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Center, Text } from "@chakra-ui/react";
import { result } from "../Result/calc/calculateResult";

export const ShowResult = ({visibility}) => {
  const Timer = useSelector((states) => {
    return states.TimerStatsReducer.timerCount;
  });
  const IncorrectLetter = useSelector((states) => {
    return states.TypedSentence.IncorrectLetter
      ? states.TypedSentence.IncorrectLetter
      : [];
  });
  const TypedLettersArray = useSelector((states) => {
    return states.TypedSentence.TypedLetter
      ? states.TypedSentence.TypedLetter
      : [];
  });
  const TimerStats = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const [newScore, setNewScore] = useState(0);
  useEffect(() => {
    if (Timer % 2 == 0) {
      let res = result(TypedLettersArray, TimerStats, IncorrectLetter);
      setNewScore(res);

      console.log(res);
    }
  }, [Timer]);
  return (
    <>
      <Center width={"fit-content"} visibility={!visibility?"hidden":"none"} hidden={!visibility}>
        <Box width={"fit-content"}>
          <Text fontFamily={"JetBrains Mono"}>
            WPM: {parseFloat(newScore.wpm).toFixed(2)}
          </Text>
        </Box>
        <Box>
          <Text fontFamily={"JetBrains Mono"}>
            Accuracy: { parseFloat(newScore.Accuracy).toFixed(2)}%
          </Text>
        </Box>
      </Center>
    </>
  );
};
