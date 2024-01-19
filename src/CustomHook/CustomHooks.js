import { useDispatch, useSelector } from "react-redux";
import { setRestAllTimerSettings } from "../Store/Slices/TimerStatsSlice";
import {
  setLetterArray,
  setRestAllTypingSentences,
} from "../Store/Slices/TypingSenSlice";
import { setRestAllTypingStats } from "../Store/Slices/typingStatsSlice";
import { paragraph } from "txtgen";
import { GenerateSentence } from "../Helper/helper";
import { useEffect } from "react";

export const useResetHook = (condition) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(condition)
    if (condition) {
      // reset all the Global states
      dispatch(setRestAllTimerSettings());
      dispatch(setRestAllTypingSentences());
      dispatch(setRestAllTypingStats());

      // do not forget to setActive for 30s
      // generate new sentence and set into LettersToType
      const _paragraph = GenerateSentence();
      dispatch(setLetterArray(_paragraph));
    }
  }, [condition]);

  return;
};
