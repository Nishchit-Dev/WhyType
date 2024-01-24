import { Img } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  PopSeconds,
  PopTypedLetter,
  PushIncorrectLetter,
  PushSeconds,
  PushedTypedLetter,
} from "../Store/Slices/TypingSenSlice";

import { fillSpace } from "../Helper/helper";
import {
  decreaseCounts,
  decreaseCursors,
  increaseCounts,
  increaseCursors,
} from "../Store/Slices/typingStatsSlice";

export function ShowText({ count, word_array }) {
  const TypingStat = useSelector((states) => {
    return states.typeStatsReducer;
  });
  const dispatch = useDispatch();
  const [RestFlag, setResetFlag] = useState(false);
  // const [cursor, setCursor] = useState(650);
  const cursor = useSelector((states) => {
    return states.typeStatsReducer.cursor;
  });

  const MaxLimit = 650;

  // const Rest = useResetHook(RestFlag);

  const increaseCurosr = () => {
    // setCursor((cursor) => cursor + 7);
    dispatch(increaseCursors());
  };
  const decreaseCurosr = () => {
    // setCursor((cursor) => cursor - 29);
    dispatch(decreaseCursors());
  };
  const decreaseCount = () => {
    // setCount((count_) => count_ - 1);
    dispatch(decreaseCounts());
  };

  const increaseCount = () => {
    // setCount((count_) => count_ + 1);
    dispatch(increaseCounts());
  };

  word_array = fillSpace(word_array);
  useEffect(() => {
    if (RestFlag) {
      setResetFlag(false);
    }
  }, [RestFlag]);
  useEffect(() => {
    const handleEvent = (event) => {
      // console.log("key -> ", event.key);
      // console.log("key -> ", event.altKey);
      if (event.ctrlKey && event.altKey && event.key === "k") {
        // Your custom logic when the key combination is pressed
        setResetFlag(true);
        // setResetFlag(false);
      }
      if (!TypingStat.isTypingActive)
        if (event.key == "Backspace") {
          if (MaxLimit > cursor && count >= 0) {
            document.querySelectorAll(`#_${count + 1}`).forEach((element) => {
              element.style.color = `Black`;
            });
            dispatch(PopTypedLetter());
            dispatch(PopSeconds());
            increaseCurosr();
            decreaseCount();
          }
        } else {
          if (event.key.length === 1) {
            if (event.key == ` `) {
              // console.log("space press->", word_array[count + 1]);
              if (word_array[count + 1] === "\u2000") {
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
                  dispatch(PushSeconds(Date.now()));
                } else {
                  dispatch(PushIncorrectLetter(event.key));

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
  }, [count, cursor, RestFlag]);
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
