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

export const ResultComponent = ({ flag }) => {
  const [flagOpen, setFlagOpen] = useState(false);

  useEffect(() => {
    setFlagOpen(setFlagOpen(flagOpen));
  }, [flag]);
  const onClose = () => {
    setFlagOpen(flagOpen);
  };
  return (
    <>
      <Box>
        <Center>
          <ResultModal isOpen={flagOpen} onClose={onClose} />
        </Center>
      </Box>
    </>
  );
};

const ResultModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px) " />
        <ModalContent top={"25vh"}>
          <ModalHeader fontFamily={"Poppins"} fontSize={"24"}>
            ScoreBoard
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Text fontFamily={"JetBrains Mono"} fontSize={"24"}>
              Wpm
            </Text>
            <Text fontFamily={"JetBrains Mono"} fontSize={"24"}>
              Accuracy
            </Text>
            <Text fontFamily={"JetBrains Mono"} fontSize={"24"}></Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
