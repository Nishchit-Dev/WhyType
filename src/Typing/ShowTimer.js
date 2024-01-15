import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ResultComponent } from "../Result/resultComponents";

export const ShowTimer = ({ flag }) => {
  const [active, setActive] = useState("one");
  const [countDown, setCountDown] = useState(0);
  const [timer, setTimer] = useState({
    time: 0,
    activeFor: 30,
    lock: false,
  });

  useEffect(() => {
    if (flag && timer.time < timer.activeFor) {
      const interval = setInterval(() => {
        if (timer.time < timer.activeFor) {
          setTimer((obj) => ({ ...obj, time: obj.time + 1 }));
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    console.log(flag);
  }, [flag, timer]);

  return (
    <>
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap={"15px"}
      >
        <Flex
          dir="row"
          bg="#E7E6E1"
          borderRadius={"8px"}
          padding={"5px"}
          gap={"10px"}
        >
          <Box
            cursor={"pointer"}
            padding="5px 10px"
            bg={active == "one" ? "#83B271" : ""}
            borderRadius={"8px"}
            onClick={(e) => {
              if (!timer.lock) {
                setTimer((obj) => ({ ...obj, activeFor: 30, lock: true }));
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
            onClick={(e) => {
              if (!timer.lock) {
                setTimer((obj) => ({ ...obj, activeFor: 60, lock: true }));
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
            onClick={(e) => {
              if (!timer.lock) {
                setTimer((obj) => ({ ...obj, activeFor: 120, lock: true }));
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
        <Flex width={"350px"} alignItems={"center"} justifyContent={"center"}>
          <Text color={"black"} fontFamily={"JetBrains Mono"} fontSize={"24px"}>
            Timer : {timer.time}
          </Text>
          <Text color={"black"} fontFamily={"JetBrains Mono"} fontSize={"24px"}>
            {timer.time >= timer.activeFor ? " Game Over" : ""}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
