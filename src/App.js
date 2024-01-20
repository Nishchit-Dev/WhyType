import {
  Center,
  ChakraProvider,
  Flex,
  Img,
  Textarea,
  useEditable,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ShowCurrentCharacter } from "./Typing/ShowCurrentChar";
import { BuiltByDeveloper } from "./Footer/Footer";
import { ShowTimer } from "./Typing/ShowTimer";
import { ResultComponent } from "./Result/resultComponents";
import { ChakraCustomTheme } from "./ChakraTheme/ChakraTheme";
import { useDispatch, useSelector } from "react-redux";

import {
  PopTypedLetter,
  PushedTypedLetter,
  setLetterArray,
} from "./Store/Slices/TypingSenSlice";
import { HeaderNav } from "./Header/Header";
import { paragraph } from "txtgen";
import {
  ConvertInToArray,
  GenerateSentence,
  fillSpace,
  keepOnlyAlphabets,
  keepOnlyAlphabetsAndSpace,
} from "./Helper/helper";
import { ShowText } from "./Typing/ShowText";
import { setDisplayTimer } from "./Store/Slices/TimerStatsSlice";
import { ShortCutKey } from "./ShortCut/ShortCut";
import { useTimerOver } from "./CustomHook/useTimerOver";

function App() {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(-1);
  const count = useSelector((states) => {
    console.log(states.typeStatsReducer.count);
    return states.typeStatsReducer.count;
  });
  const [timeLock, setTimeLock] = useState(false);
  const isTimerOver = useTimerOver();
  const word_array = useSelector((states) => {
    return states.TypedSentence.LetterToType;
  });
  useEffect(() => {
    let _paragraph = GenerateSentence();
    console.log(_paragraph);
    dispatch(setLetterArray(_paragraph));
  }, []);

  useEffect(() => {
    if (word_array.length > 0) {
      if (count != -1 && !timeLock) {
        setTimeLock(true);
        dispatch(setDisplayTimer(true));
        console.log("set false");
      }
    }
  }, [count]);
  useEffect(() => {
    if (isTimerOver) {
      setTimeLock(false);
    }
  }, [isTimerOver]);
  return (
    <>
      <HeaderNav />
      <Box>
        <Center flexDir={"column"} w="100%" h="97.7vh">
          <Center
            justifyContent={"end"}
            alignItems={"flex-end"}
            h="200px"
          ></Center>
          <Center h="70vh" justifyContent={"end"} alignItems={"flex-end"}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {word_array.length > 0 ? (
                <>
                  <ShowTimer flag={timeLock} />

                  <ShowCurrentCharacter arr={word_array} count={count} />
                </>
              ) : (
                <></>
              )}
            </Flex>
          </Center>
          <Center w="70%" h="100vh" alignItems={"start"}>
            <Box overflow={"hidden"} m="10px" pos={"relative"}>
              {word_array.length > 0 ? (
                <ShowText
                  count={count}
                  // setCount={setCount}
                  // setTimeLock={setTimeLock}
                  word_array={word_array}
                />
              ) : (
                <></>
              )}
            </Box>
          </Center>
          <ShortCutKey />
        </Center>
      </Box>
      <BuiltByDeveloper />
      <ResultComponent />
    </>
  );
}
function ChakraWapper() {
  return (
    <>
      <ChakraProvider theme={ChakraCustomTheme()}>
        <App />
      </ChakraProvider>
    </>
  );
}

export default ChakraWapper;
