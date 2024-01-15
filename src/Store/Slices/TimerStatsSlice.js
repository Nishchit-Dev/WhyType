import { createSlice } from "@reduxjs/toolkit";

export const TimerStatsSlice = createSlice({
  name: "TimerStats",
  initialState: {
    timerCount: -1,
    ActiveFor: 0,
    lock: false,
  },
  reducers: {
    increaseTimerCount: (states, action) => {
      states.timerCount = states.timerCount + 1;
    },
    setActiveFor: (states, action) => {
      states.ActiveFor = action.payload;
    },
    setLock: (states, action) => {
      states.lock = !states.lock;
    },
  },
});
