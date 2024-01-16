import { configureStore } from "@reduxjs/toolkit";

import typeStatSlice from "./Slices/typingStatsSlice";
import TimerStatsSlice from "./Slices/TimerStatsSlice";
import TypingSenctenceSlice from "./Slices/TypingSenSlice";

export default configureStore({
  reducer: {
    typeStatsReducer: typeStatSlice,
    TimerStatsReducer: TimerStatsSlice,
    TypedSentence: TypingSenctenceSlice,
  },
});
