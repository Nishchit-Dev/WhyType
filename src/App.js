import {
  Center,
  ChakraProvider,
  Textarea,
  useEditable,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ShowCurrentCharacter } from "./Typing/ShowCurrentChar";
import { BuiltByDeveloper } from "./Footer/Footer";
function fillSpace(arr) {
  let newArray = arr.map((element) =>
    element === " " ? `\u2000` : element.toLowerCase()
  );

  return newArray;
}
let word_array = [
  "O",
  "n",
  "c",
  "e",
  " ",
  "u",
  "p",
  "o",
  "n",
  " ",
  "a",
  " ",
  "t",
  "i",
  "m",
  "e",
  " ",
  "i",
  "n",
  " ",
  "a",
  " ",
  "q",
  "u",
  "a",
  "i",
  "n",
  "t",
  " ",
  "l",
  "i",
  "t",
  "t",
  "l",
  "e",
  " ",
  "v",
  "i",
  "l",
  "l",
  "a",
  "g",
  "e",
  " ",
  "n",
  "e",
  "s",
  "t",
  "l",
  "e",
  "d",
  " ",
  "b",
  "e",
  "t",
  "w",
  "e",
  "e",
  "n",
  " ",
  "r",
  "o",
  "l",
  "l",
  "i",
  "n",
  "g",
  " ",
  "h",
  "i",
  "l",
  "l",
  "s",
  " ",
  "a",
  "n",
  "d",
  " ",
  "l",
  "u",
  "s",
  "h",
  " ",
  "f",
  "o",
  "r",
  "e",
  "s",
  "t",
  "s",

  " ",
  "t",
  "h",
  "e",
  "r",
  "e",
  " ",
  "l",
  "i",
  "v",
  "e",
  "d",
  " ",
  "a",
  " ",
  "c",
  "u",
  "r",
  "i",
  "o",
  "u",
  "s",
  " ",
  "y",
  "o",
  "u",
  "n",
  "g",
  " ",
  "g",
  "i",
  "r",
  "l",
  " ",
  "n",
  "a",
  "m",
  "e",
  "d",
  " ",
  "L",
  "i",
  "l",
  "y",

  " ",
  "L",
  "i",
  "l",
  "y",
  " ",
  "h",
  "a",
  "d",
  " ",
  "a",
  "n",
  " ",
  "i",
  "n",
  "s",
  "a",
  "t",
  "i",
  "a",
  "b",
  "l",
  "e",
  " ",
  "a",
  "p",
  "p",
  "e",
  "t",
  "i",
  "t",
  "e",
  " ",
  "f",
  "o",
  "r",
  " ",
  "a",
  "d",
  "v",
  "e",
  "n",
  "t",
  "u",
  "r",
  "e",
  " ",
  "a",
  "n",
  "d",
  " ",
  "a",
  " ",
  "h",
  "e",
  "a",
  "r",
  "t",
  " ",
  "f",
  "u",
  "l",
  "l",
  " ",
  "o",
  "f",
  " ",
  "d",
  "r",
  "e",
  "a",
  "m",
  "s",

  "O",
  "n",
  "e",
  " ",
  "s",
  "u",
  "n",
  "n",
  "y",
  " ",
  "m",
  "o",
  "r",
  "n",
  "i",
  "n",
  "g",

  " ",
  "L",
  "i",
  "l",
  "y",
  " ",
  "d",
  "i",
  "s",
  "c",
  "o",
  "v",
  "e",
  "r",
  "e",
  "d",
  " ",
  "a",
  " ",
  "m",
  "y",
  "s",
  "t",
  "e",
  "r",
  "i",
  "o",
  "u",
  "s",

  " ",
  "d",
  "u",
  "s",
  "t",
  "y",
  " ",
  "b",
  "o",
  "o",
  "k",
  " ",
  "t",
  "u",
  "c",
  "k",
  "e",
  "d",
  " ",
  "a",
  "w",
  "a",
  "y",
  " ",
  "i",
  "n",
  " ",
  "t",
  "h",
  "e",
  " ",
  "c",
  "o",
  "r",
  "n",
  "e",
  "r",
  " ",
  "o",
  "f",
  " ",
  "t",
  "h",
  "e",
  " ",
  "v",
  "i",
  "l",
  "l",
  "a",
  "g",
  "e",
  " ",
  "l",
  "i",
  "b",
  "r",
  "a",
  "r",
  "y",

  " ",
  "T",
  "h",
  "e",
  " ",
  "b",
  "o",
  "o",
  "k",

  " ",
  "a",
  "d",
  "o",
  "r",
  "n",
  "e",
  "d",
  " ",
  "w",
  "i",
  "t",
  "h",
  " ",
  "a",
  " ",
  "f",
  "a",
  "d",
  "e",
  "d",
  " ",
  "l",
  "e",
  "a",
  "t",
  "h",
  "e",
  "r",
  " ",
  "c",
  "o",
  "v",
  "e",
  "r",

  " ",
  "b",
  "e",
  "c",
  "k",
  "o",
  "n",
  "e",
  "d",
  " ",
  "h",
  "e",
  "r",
  " ",
  "w",
  "i",
  "t",
  "h",
  " ",
  "p",
  "r",
  "o",
  "m",
  "i",
  "s",
  "e",
  "s",
  " ",
  "o",
  "f",
  " ",
  "m",
  "a",
  "g",
  "i",
  "c",
  "a",
  "l",
  " ",
  "r",
  "e",
  "a",
  "l",
  "m",
  "s",
  " ",
  "a",
  "n",
  "d",
  " ",
  "e",
  "n",
  "c",
  "h",
  "a",
  "n",
  "t",
  "e",
  "d",
  " ",
  "l",
  "a",
  "n",
  "d",
  "s",

  " ",
  "U",
  "n",
];
function ShowText({ count, setCount }) {
  const [cursor, setCursor] = useState(650);
  const MaxLimit = 650;

  const increaseCurosr = () => {
    setCursor((cursor) => cursor + 7);
  };
  const decreaseCurosr = () => {
    setCursor((cursor) => cursor - 28);
  };
  const decreaseCount = () => {
    setCount((count_) => count_ - 1);
  };

  const increaseCount = () => {
    setCount((count_) => count_ + 1);
  };

  useEffect(() => {
    console.log("count changed ->", count);
  }, [count]);

  word_array = fillSpace(word_array);

  useEffect(() => {
    const handleEvent = (event) => {
      console.log("key -> ", event.key);
      if (event.key == "Backspace") {
        console.log(event.key);
        if (MaxLimit > cursor && count >= 0) {
          document.querySelectorAll(`#_${count + 1}`).forEach((element) => {
            element.style.color = `Black`;
          });
          increaseCurosr();
          decreaseCount();
        }
      } else {
        if (event.key.length === 1) {
          console.log("Length one");
          if (event.key == ` `) {
            console.log("space press->", word_array[count + 1]);
            if (word_array[count + 1] == "\u2000") {
              console.log("Matched key");
              increaseCount();
              console.log(event.key);
              increaseCurosr();
            }
          } else {
            if (
              (event.key.charCodeAt(0) >= 65 &&
                event.key.charCodeAt(0) <= 90) ||
              (event.key.charCodeAt(0) >= 95 && event.key.charCodeAt(0) <= 122)
            ) {
              console.log("count -> ", count);
              console.log("key -> ", event.key);
              console.log("word_array[count + 1] -> ", word_array[count]);

              if (word_array[count + 1] == event.key) {
                console.log("Matched key");
                document
                  .querySelectorAll(`#_${count + 1}`)
                  .forEach((element) => {
                    element.style.color = `Black`;
                  });
                increaseCount();
                console.log(event.key);
                decreaseCurosr();
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

    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [count, cursor]);
  return (
    <>
      <Box
        className="box"
        key={"Key0"}
        display={"flex"}
        flexDir={"row"}
        position={"relative"}
        left={(cursor + "px").toString()}
        // opacity={op}
        overflow={"visible"}
        transition="left 1s linear"
        // flexWrap={"wrap"}
      >
        {word_array.map((ele, i) => {
          return (
            <Text
              key={i}
              id={`_${i}`}
              opacity={count >= i ? 0.7 : 0.2}
              color={"black"}
              fontSize={"42px"}
              fontFamily={"JetBrains Mono"}
            >
              {ele}
            </Text>
          );
        })}
      </Box>
    </>
  );
}

function App() {
  const [count, setCount] = useState(-1);

  return (
    <>
      <Box>
        <Center flexDir={"column"} w="100%" h="100vh">
          <Center h="70vh" justifyContent={"end"} alignItems={"flex-end"}>
            <ShowCurrentCharacter arr={word_array} count={count} />
          </Center>
          <Center w="100%" h="100vh" alignItems={"start"}>
            <Box overflow={"hidden"} m="10px" pos={"relative "}>
              <ShowText count={count} setCount={setCount} />
            </Box>
          </Center>
        </Center>
      </Box>
      <BuiltByDeveloper/>
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
