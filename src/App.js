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
  fillSpace,
  keepOnlyAlphabets,
  keepOnlyAlphabetsAndSpace,
} from "./Helper/helper";

function ShowText({ count, setCount, word_array }) {
  const TypingStat = useSelector((states) => {
    return states.typeStatsReducer;
  });
  const dispatch = useDispatch();

  const [cursor, setCursor] = useState(650);
  const MaxLimit = 650;

  const increaseCurosr = () => {
    setCursor((cursor) => cursor + 7);
  };
  const decreaseCurosr = () => {
    setCursor((cursor) => cursor - 29);
  };
  const decreaseCount = () => {
    setCount((count_) => count_ - 1);
  };

  const increaseCount = () => {
    setCount((count_) => count_ + 1);
  };

  word_array = fillSpace(word_array);

  useEffect(() => {
    const handleEvent = (event) => {
      // console.log("key -> ", event.key);
      if (!TypingStat.isTypingActive)
        if (event.key == "Backspace") {
          if (MaxLimit > cursor && count >= 0) {
            document.querySelectorAll(`#_${count + 1}`).forEach((element) => {
              element.style.color = `Black`;
            });
            dispatch(PopTypedLetter());
            increaseCurosr();
            decreaseCount();
          }
        } else {
          if (event.key.length === 1) {
            if (event.key == ` `) {
              // console.log("space press->", word_array[count + 1]);
              if (word_array[count + 1] == "\u2000") {
                dispatch(PushedTypedLetter(event.key));

                increaseCount();
                // console.log(event.key);
                increaseCurosr();
              }
            } else {
              if (
                (event.key.charCodeAt(0) >= 65 &&
                  event.key.charCodeAt(0) <= 90) ||
                (event.key.charCodeAt(0) >= 95 &&
                  event.key.charCodeAt(0) <= 122)
              ) {
                // console.log("count -> ", count);
                // console.log("key -> ", event.key);
                // console.log("word_array[count + 1] -> ", word_array[count]);

                if (word_array[count + 1] == event.key) {
                  // console.log("Matched key");
                  document
                    .querySelectorAll(`#_${count + 1}`)
                    .forEach((element) => {
                      element.style.color = `Black`;
                    });
                  increaseCount();
                  // console.log(event.key);
                  decreaseCurosr();
                  dispatch(PushedTypedLetter(event.key));
                } else {
                  document
                    .querySelectorAll(`#_${count + 1}`)
                    .forEach((element) => {
                      element.style.color = `#E94B3E`;
                    });
                }
              }
            }
          }
        }
    };
    window.addEventListener("keydown", handleEvent);

    if (TypingStat.isTypingActive) {
      window.removeEventListener("keydown", handleEvent);
    }
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [count, cursor]);
  return (
    <>
      <Img
        src={"/fade-text-left.png"}
        position={"absolute"}
        zIndex={999}
        left={"-2px"}
        height={"100px"}
      />
      <Box
        className="box"
        key={"Key0"}
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        position={"relative"}
        // transform={("translateX(" + cursor + "px)").toString()}
        left={(cursor + "px").toString()}
        // opacity={op}
        overflow={"visible"}
        transition="left 0.5s ease-out"
        // flexWrap={"wrap"}
      >
        {word_array.map((ele, i) => {
          return (
            <Text
              key={i}
              display={"flex"}
              id={`_${i}`}
              opacity={count + 1 >= i ? 0.7 : 0.2}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={{
                md: count == i ? "35px" : "33px",
                lg: count == i ? "37px" : "35px",
                xl: count == i ? "39px" : "37px",
                "2xl": count == i ? "41px" : "39px",
                "3xl": count == i ? "43px" : "41px",
                xxl: count == i ? "45px" : "43px",
              }}
              fontWeight={count + 1 == i && count < 9999 ? "bold" : "regular"}
              color={"black"}
              fontFamily={"JetBrains Mono"}
            >
              {ele}
            </Text>
          );
        })}
      </Box>
      <Img
        src={"/fade-text-right.png"}
        position={"absolute"}
        zIndex={999}
        height={"100px"}
        right={"0px"}
        top={"0px"}
      />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(-1);
  const [timeLock, setTimeLock] = useState(false);
  const word_array = useSelector((states) => {
    return states.TypedSentence.LetterToType;
  });
  useEffect(() => {
    let _paragraph = paragraph(3);
    _paragraph = ConvertInToArray(_paragraph);
    _paragraph = keepOnlyAlphabetsAndSpace(_paragraph);
    console.log(_paragraph);
    dispatch(setLetterArray(_paragraph));
  }, []);

  useEffect(() => {
    if (word_array.length > 0) {
      if (count != -1 && !timeLock) {
        setTimeLock(true);

        console.log("set false");
      }
    }
  }, [count]);
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
                  setCount={setCount}
                  // setTimeLock={setTimeLock}
                  word_array={word_array}
                />
              ) : (
                <></>
              )}
            </Box>
          </Center>
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
