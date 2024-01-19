import { Center, Flex, Kbd } from "@chakra-ui/react";
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
    <Center width={"100%"}>
      <span>
        <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>K</Kbd>
      </span>
    </Center>
  );
};
