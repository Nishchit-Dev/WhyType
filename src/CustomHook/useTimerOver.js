import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useTimerOver = () => {
  const { timerCount, ActiveFor } = useSelector((states) => {
    return states.TimerStatsReducer;
  });
  const [timeOverFlag, setTimeOverFlag] = useState(false);
  useEffect(() => {
    if (timerCount + 1 < ActiveFor) {
      setTimeOverFlag(false);
    } else {
      setTimeOverFlag(true);
    }
  }, [timerCount, ActiveFor]);

  return timeOverFlag;
};
