import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useTimerOver = () => {
  const { timerCount, ActiveFor } = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const [timeOverFlag, setTimeOverFlag] = useState(false);
  useEffect(() => {
    console.log("timerCount : ", timerCount);
    console.log("ActiveFor : ", ActiveFor);

    if (timerCount + 1< ActiveFor) {
      console.log("not over");
      setTimeOverFlag(false);
    } else {
      console.log("over");

      setTimeOverFlag(true);
    }
  }, [timerCount, ActiveFor]);

  return timeOverFlag;
};
