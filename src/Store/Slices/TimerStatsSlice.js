import { createSlice } from "@reduxjs/toolkit";

export const TimerStatsSlice = createSlice({
  name: "TimerStats",
  initialState: {
    timerCount: -1,
    ActiveFor: 30,
    TimerLock: false,
    DisplayTimer: false,
  },
  reducers: {
    increaseTimerCount: (states, action) => {
      states.timerCount = states.timerCount + 1;
    },
    setActiveFor: (states, action) => {
      states.ActiveFor = action.payload;
    },
    setLock: (states, action) => {
      states.TimerLock = !states.TimerLock;
    },
    setAll: (states, action) => {
      states.ActiveFor = action.payload.ActiveFor;
      states.TimerLock = action.payload.TimerLock;
    },
    setDisplayTimer: (states, action) => {
      states.DisplayTimer = action.payload;
      console.log("changed");
    },
    setRestAllTimerSettings: (states) => {
      states.ActiveFor = 30;
      states.DisplayTimer = false;
      states.TimerLock = false;
      states.timerCount = -1;
    },
  },
});

export const {
  increaseTimerCount,
  setActiveFor,
  setLock,
  setAll,
  setRestAllTimerSettings,
  setDisplayTimer,
} = TimerStatsSlice.actions;

export default TimerStatsSlice.reducer;
