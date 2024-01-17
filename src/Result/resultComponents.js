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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { result } from "./calc/calculateResult";
import { ShowConfetti } from "./confetti";

export const ResultComponent = () => {
  const [flagOpen, setFlagOpen] = useState(false);
  const TypingStats = useSelector((states) => {
    return states.typeStatsReducer;
  });
  const TypedLettersArray = useSelector((states) => {
    return states.TypedSentence.TypedLetter;
  });
  const TimerStats = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const [results, setResults] = useState({
    wpm: 0,
    accuracy: 0,
  });

  useEffect(() => {
    if (!flagOpen && TypedLettersArray.length > 0) {
      setFlagOpen(!flagOpen);
      let res = result(TypedLettersArray, TimerStats);
      setResults({ wpm: res, accuracy: 0 });
    }
  }, [TypingStats]);
  const onClose = () => {
    setFlagOpen(!flagOpen);
  };
  return (
    <>
      <Box>
        <Center>
          <ResultModal isOpen={flagOpen} onClose={onClose} results={results} />
          {flagOpen ? <ShowConfetti /> : <></>}
        </Center>
      </Box>
    </>
  );
};

const ResultModal = ({ isOpen, onClose, results }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={false} closeOnOverlayClick={false} returnFocusOnClose={false} trapFocus={false}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px) " />
        <ModalContent top={"25vh"}>
          <ModalHeader fontFamily={"Poppins"} fontSize={"24"}>
            ScoreBoard
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Text fontFamily={"JetBrains Mono"} fontSize={"24"}>
                Wpm
              </Text>
              <Text
                fontFamily={"JetBrains Mono"}
                fontSize={"54"}
                fontWeight={"700"}
              >
                {results ? results.wpm.toFixed(3) : ""}
              </Text>
            </Box>

            <Text fontFamily={"JetBrains Mono"} fontSize={"24"}></Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
