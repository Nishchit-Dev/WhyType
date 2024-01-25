import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ShowProgressBar = () => {
  const ProgressStats = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const [width, setWidth] = useState("1%");
  useEffect(() => {
    let TotalProgressTime = ProgressStats.ActiveFor;
    let currentProgressTime = ProgressStats.timerCount;
    console.log(ProgressStats.ActiveFor);
    console.log(ProgressStats.timerCount);

    let percentageWidth = (
      (currentProgressTime / TotalProgressTime) *
      100
    ).toFixed(2);
    setWidth((percentageWidth + "%").toString());
  }, [ProgressStats]);

  return (
    <>
      <Box
        position={"fixed"}
        zIndex={100}
        w={width}
        h="7px"
        bg={"#FFA447"}
        transition="width 0.5s ease-out"
      ></Box>
    </>
  );
};
