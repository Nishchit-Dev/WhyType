import { createSlice } from "@reduxjs/toolkit";

export const typeStatSlice = createSlice({
  name: "TypingStats",
  initialState: {
    cursor: -1,
    isTypingActive:false
  },

  reducers: {
    // inc counts
    increaseCounts: (states, action) => {
      states.cursor = states.cursor + 1;
    },
    // dec counts
    decreaseCounts: (states, action) => {
      states.cursor = states.cursor - 1;
    },
    // changes typing status
    setTypingActiveStatus: (states,action) => {
      states.isTypingActive = action.payload;
      console.log("tpying status changed")
    },
  },
});

export const {increaseCounts,decreaseCounts,setTypingActiveStatus} = typeStatSlice.actions

export default typeStatSlice.reducer