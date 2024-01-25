import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { result } from "./calc/calculateResult";
import { ShowConfetti } from "./confetti";
import { useTimerOver } from "../CustomHook/useTimerOver";
import { setRestAllTimerSettings } from "../Store/Slices/TimerStatsSlice";
import { ScoreGraph } from "./Graph/ShowGraph";

export const ResultComponent = () => {
  const dispatch = useDispatch();
  const [flagOpen, setFlagOpen] = useState(false);
  const TypingStats = useSelector((states) => {
    return states.typeStatsReducer;
  });
  const IncorrectLetter = useSelector((states) => {
    return states.TypedSentence.IncorrectLetter;
  });
  const TypedLettersArray = useSelector((states) => {
    return states.TypedSentence.TypedLetter;
  });
  const LetterToType = useSelector((states) => {
    return states.TypedSentence.LetterToType;
  });

  const TimerStats = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const isTimerOver = useTimerOver();
  const [results, setResults] = useState({
    wpm: 0,
    accuracy: 0,
  });

  useEffect(() => {
    if (TypedLettersArray.length >= LetterToType.length) {
      let res = result(TypedLettersArray, TimerStats, IncorrectLetter);
      setResults({ wpm: res.wpm, accuracy: res.Accuracy });
      dispatch(setRestAllTimerSettings());
    }
  }, [LetterToType, TypedLettersArray]);

  useEffect(() => {
    if (TypedLettersArray.length > 0) {
      if (isTimerOver) {
        setFlagOpen(!flagOpen);

        let res = result(TypedLettersArray, TimerStats, IncorrectLetter);
        setResults({ wpm: res.wpm, accuracy: res.Accuracy });
      }
    }
  }, [TypedLettersArray, isTimerOver]);

  const onClose = () => {
    setFlagOpen(!flagOpen);
    dispatch(setRestAllTimerSettings());
  };
  return (
    <>
      <Box>
        <Center>
          <ResultModal
            isOpen={isTimerOver}
            onClose={onClose}
            results={results}
          />
          {isTimerOver ? <ShowConfetti /> : <></>}
        </Center>
      </Box>
    </>
  );
};

const ResultModal = ({ isOpen, onClose, results }) => {
  const _Text = useSelector((states) => {
    return states.TypedSentence;
  });
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        returnFocusOnClose={false}
        size={"6xl"}
        trapFocus={false}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
        <ModalContent top={"10vh"}>
          <ModalHeader fontFamily={"Poppins"} fontSize={"24"}>
            ScoreBoard
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Center alignItems={"center"} justifyContent={"center"}>
              <ScoreGraph />

              <Flex justifyContent={"space-evenly"} flexDir={"column"} marginY={"20px"}>
                <Box>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"24"}
                    opacity={"0.7"}
                  >
                    Wpm
                  </Text>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"54"}
                    fontWeight={"700"}
                    color={"#FFA447"}
                  >
                    {results ? results.wpm.toFixed(2) : ""}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"24"}
                    opacity={"0.7"}
                  >
                    Accuracy
                  </Text>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"54"}
                    fontWeight={"700"}
                  >
                    {results ? results.accuracy.toFixed(2) + "%" : ""}
                  </Text>
                </Box>
              </Flex>
            </Center>

            <Box marginTop={"20px"}>
              <Flex
                justifyContent={"space-evenly"}
                alignItems={"center"}
                wrap={"wrap"}
                rowGap={"20px"}
              >
                <Box>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"18"}
                    opacity={"0.7"}
                  >
                    Total Characters
                  </Text>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"22"}
                    fontWeight={"700"}
                  >
                    {_Text ? _Text.CharCount : "0"}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"18"}
                    opacity={"0.7"}
                  >
                    Incorrect Characters
                  </Text>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"22"}
                    fontWeight={"700"}
                  >
                    {_Text ? _Text.IncorrectLetter.length : "0"}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"18"}
                    opacity={"0.7"}
                  >
                    Characters Typed
                  </Text>
                  <Text
                    fontFamily={"JetBrains Mono"}
                    fontSize={"22"}
                    fontWeight={"700"}
                  >
                    {_Text ? _Text.TypedLetter.length : "0"}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
