import { createSlice } from "@reduxjs/toolkit";

export const TimerStatsSlice = createSlice({
  name: "TimerStats",
  initialState: {
    timerCount: -1,
    ActiveFor: 0,
    TimerLock: false,
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
    setAll:(states,action)=>{
      states.ActiveFor = action.payload.ActiveFor
      states.TimerLock = action.payload.TimerLock
    } 
  },
});

export const {increaseTimerCount,setActiveFor,setLock,setAll} = TimerStatsSlice.actions

export default TimerStatsSlice.reducer