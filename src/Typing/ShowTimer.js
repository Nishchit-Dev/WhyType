import { Box, Flex, Text, useSlider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ResultComponent } from "../Result/resultComponents";
import { useDispatch, useSelector } from "react-redux";
import { setTypingActiveStatus } from "../Store/Slices/typingStatsSlice";
import {
  increaseTimerCount,
  setActiveFor,
  setAll,
  setDisplayTimer,
} from "../Store/Slices/TimerStatsSlice";
import { ShowResult } from "./ShowResult";

export const ShowTimer = ({ flag }) => {
  const [active, setActive] = useState("one");
  const ActiveFlagForTimer = useSelector((states) => {
    return states.TimerStatsReducer.DisplayTimer;
  });
  const dispatch = useDispatch();
  const timer = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  useEffect(() => {
    dispatch(setActiveFor(30));
    if (!timer.TimerLock) dispatch(setAll({ ActiveFor: 30, TimerLock: true }));
  }, []);

  useEffect(() => {
    let interval;
    console.log(timer)
    if (timer.timerCount <= timer.ActiveFor) {
      dispatch(setTypingActiveStatus(false));
      console.log("stop")
      dispatch(setDisplayTimer(true));
    }else{
      dispatch(setTypingActiveStatus(true));
      console.log("stop")
      dispatch(setDisplayTimer(false));
    }
    if (flag && timer.timerCount < timer.ActiveFor) {
      interval = setInterval(() => {
        if (timer.timerCount < timer.ActiveFor) {
          // setTimer((obj) => ({ ...obj, time: obj.time + 1 }));
          dispatch(increaseTimerCount());
        } else {
          clearInterval(interval);
        }
        if (flag) {
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [flag, timer]);

  return (
    <>
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap={"15px"}
      >
        {/* {!ActiveFlagForTimer ? ( */}
        <Flex
          visibility={ActiveFlagForTimer ? "hidden" : "none"}
          dir="row"
          bg="whitesmoke"
          borderRadius={"8px"}
          padding={"5px"}
          gap={"10px"}
        >
          <Box
            cursor={"pointer"}
            padding="5px 10px"
            // bg={active == "one" ? "#83B271" : ""}
            opacity={active == "one" ? "1" : "0.5"}
            _hover={{ opacity: "1" }}
            borderRadius={"8px"}
            onClick={(e) => {
              if (!timer.lock) {
                dispatch(setAll({ ActiveFor: 30, TimerLock: true }));
                // setTimer((obj) => ({ ...obj, activeFor: 30, lock: true }));
                setActive("one");
              }
            }}
          >
            <Text
              fontSize={"18px"}
              color={"black"}
              fontFamily={"JetBrains Mono"}
            >
              30s
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            padding="5px 10px"
            borderRadius={"8px"}
            bg={active == "two" ? "#F2A154" : ""}
            opacity={active == "two" ? "1" : "0.5"}
            _hover={{ opacity: "1" }}
            onClick={(e) => {
              if (!timer.lock) {
                dispatch(setAll({ ActiveFor: 60, TimerLock: true }));

                // setTimer((obj) => ({ ...obj, activeFor: 60, lock: true }));
                setActive("two");
              }
            }}
          >
            <Text
              fontSize={"18px"}
              color={"black"}
              fontFamily={"JetBrains Mono"}
            >
              60s
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            padding="5px 10px"
            borderRadius={"8px"}
            bg={active == "three" ? "#F47C7C" : ""}
            opacity={active == "three" ? "1" : "0.5"}
            _hover={{ opacity: "1" }}
            onClick={(e) => {
              if (!timer.lock) {
                dispatch(setAll({ ActiveFor: 120, TimerLock: true }));
                // setTimer((obj) => ({ ...obj, activeFor: 120, lock: true }));
                setActive("three");
              }
            }}
          >
            <Text
              fontSize={"18px"}
              color={"black"}
              fontFamily={"JetBrains Mono"}
            >
              120s
            </Text>
          </Box>
        </Flex>
        {/* ) : ( */}
        <></>
        {/* )} */}
        <Flex width={"350px"} alignItems={"center"} justifyContent={"center"}>
          <Text color={"black"} fontFamily={"JetBrains Mono"} fontSize={"24px"}>
            Timer : {timer.timerCount}
          </Text>
        </Flex>
        <ShowResult visibility={ActiveFlagForTimer} />
      </Flex>
    </>
  );
};
