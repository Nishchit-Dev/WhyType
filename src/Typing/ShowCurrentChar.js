import { Text } from "@chakra-ui/react";

export const ShowCurrentCharacter = ({ arr, count }) => {
  return (
    <>
      <Text fontFamily={"jetBrains Mono"} fontSize={"32px"}>
        Type - {WhatToShow(arr[count+1].toLowerCase())}
      </Text>
    </>
  );
};

function WhatToShow(charecter) {
  if (" " == charecter || "\u2000" ==  charecter) {
    return "Space";
  }
  return charecter;
}
