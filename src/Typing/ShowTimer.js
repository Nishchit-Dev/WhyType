import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ShowTimer = () => {
  const [active, setActive] = useState("one"); 
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
            onClick={(e) => setActive("one")}
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
            onClick={(e) => setActive("two")}
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
            onClick={(e) => setActive("three")}
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
        <Flex width={"200px"} alignItems={"center"} justifyContent={"center"}>
          <Text color={"black"} fontFamily={"JetBrains Mono"} fontSize={"24px"}>
            Timer : {timer}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
