import {
  Center,
  ChakraProvider,
  Textarea,
  useEditable,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ShowText({ arr = [], op, cursor }) {
  return (
    <>
      <Box
        className="box"
        key={"Key"}
        display={"flex"}
        flexDir={"row"}
        position={"relative"}
        left={(cursor + "px").toString()}
        opacity={op}
        overflow={"visible"}
        transition= "left 0.3s ease"
        // flexWrap={"wrap"}
      >
        {arr.map((ele, i) => {
          return (
            <Text
              key={i}
              id={i}
              color={"black"}
              fontSize={"32px"}
              fontFamily={"JetBrains Mono"}
            >
              {ele}&#10240;
            </Text>
          );
        })}
      </Box>
    </>
  );
}

function App() {
  const [cursor, setCursor] = useState(650);
  const MaxLimit = 250;

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key == "Backspace") {
        // if (MaxLimit + 1 > cursor) {
          console.log("Max -> ", MaxLimit, " cursor -> ", cursor);
          setCursor((prevCursor) => {
            return prevCursor + 5;
          });
        // }
      } else {
        if (event.key.length == 1) {
          if (
            (event.key.charCodeAt(0) >= 65 && event.key.charCodeAt(0) <= 90) ||
            (event.key.charCodeAt(0) >= 95 && event.key.charCodeAt(0) <= 122)
          ) {
            console.log("Max -> ", MaxLimit, " cursor -> ", cursor);

            setCursor((prevCursor) => {
              return prevCursor - 5;
            });
          }
        }
      }
    });
  }, []);
  const word_array = [
    "apple",
    "banana",
    "chocolate",
    "dog",
    "elephant",
    "forest",
    "guitar",
    "happiness",
    "island",
    "jazz",
    "kangaroo",
    "laptop",
    "mountain",
    "notebook",
    "ocean",
    "penguin",
    "quasar",
    "rainbow",
    "sunset",
    "tiger",
    "umbrella",
    "violin",
    "waterfall",
    "xylophone",
    "yellow",
    "zebra",
    "astronomy",
    "butterfly",
    "cactus",
    "dragon",
    "eclipse",
    "firefly",
    "galaxy",
    "horizon",
    "illusion",
    "jupiter",
    "kaleidoscope",
    "lighthouse",
    "moonlight",
    "nebula",
    "oasis",
    "paradise",
    "quicksilver",
    "rhapsody",
    "serendipity",
    "twilight",
    "unicorn",
    "volcano",
    "whisper",
  ];
  return (
    <>
      <Box>
        <Center w="100%" h="100vh">
          <Box overflow={"hidden"} m="10px">
            <ShowText arr={word_array} op={"0.5"} cursor={cursor} />
            {/* <ShowText arr={word_array} op={"0.7"} cursor={cursor}/> */}
          </Box>
        </Center>
      </Box>
    </>
  );
}
function ChakraWapper() {
  return (
    <>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </>
  );
}

export default ChakraWapper;
