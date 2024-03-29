import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";

export const HeaderNav = () => {
  return (
    <Box w={"100%"} position={"fixed"} p="5px" marginTop={"10px"}>
      <Center>
        <Flex borderRadius={"9px"} bg={"whitesmoke"}>
          <Flex
            p="10px 15px"
            flexDir={"row"}
            gap={"50px"}
            alignItems={"center"}
          >
            <Box
              background={
                "#FFA447"}
              bgSize={"400% 400%"}
              animation={"gradient 15s ease infinite;"}
              p={"5px 20px"}
              borderRadius={"9px"}
            >
              <Text
                fontFamily={"Poppins"}
                fontSize={"28"}
                fontWeight={"800"}
                color={"white"}
              >
                Why-Type
              </Text>
            </Box>

            <Box>
              <Flex flexDir={"row"} gap={"30px"}>
                <Box cursor={"pointer"}>
                  <Img src={"/crown-ic.svg"} />
                </Box>

                <Box cursor={"pointer"}>
                  <Img src={"/path-ic.svg"} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};
