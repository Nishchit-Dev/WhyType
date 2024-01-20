import { Box, Center, Flex, Kbd, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useResetHook } from "../CustomHook/CustomHooks";

export const ShortCutKey = () => {
  const [RestFlag, setResetFlag] = useState(false);
  const Rest = useResetHook(RestFlag);

  const cursor = useSelector((states) => {
    return states.typeStatsReducer.cursor;
  });
  useEffect(() => {
    if (RestFlag) {
      setResetFlag(false);
    }
  }, [RestFlag]);

  useEffect(() => {
    const handleEvent = (event) => {
      if (event.ctrlKey && event.altKey && event.key === "k") {
        // Your custom logic when the key combination is pressed
        console.log("Ctrl + Alt + R pressed");

        console.log("Alt + R is pressed");
        setResetFlag(true);
        // setResetFlag(false);
      }
    };

    window.addEventListener("keydown", handleEvent);
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [cursor]);

  return (
    <Center
      width={"100%"}
      marginTop={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      display={"flex"}
    >
      <Box
        opacity={0.6}
        alignItems={"center"}
        textAlign={"center"}
        display={"flex"}
        textAlign="center"
      >
        <Kbd>ctrl</Kbd>
        <Text textAlign={"center"}>
          {"\u2000"}+{"\u2000"}
        </Text>{" "}
        <Kbd> alt </Kbd>{" "}
        <Text>
          {"\u2000"}+{"\u2000"}
        </Text>{" "}
        <Kbd>k</Kbd>
      </Box>
      <Text
        fontFamily={"poppins"}
        opacity={0.6}
        fontWeight={"300"}
        fontSize={"15px"}
        textAlign={"center"}
      >
        {"\u2000"} - to reset
      </Text>
    </Center>
  );
};
