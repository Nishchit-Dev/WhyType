import { createSlice } from "@reduxjs/toolkit";

export const typeStatSlice = createSlice({
  name: "TypingStats",
  initialState: {
    cursor: 650,
    count: -1,
    isTypingActive: false,
  },

  reducers: {
    // inc counts
    increaseCursors: (states, action) => {
      states.cursor = states.cursor + 7;
    },
    // dec counts
    decreaseCursors: (states, action) => {
      states.cursor = states.cursor - 29;
    },
    increaseCounts: (states, action) => {
      states.count = states.count + 1;
    },
    // dec counts
    decreaseCounts: (states, action) => {
      states.count = states.count - 1;
    },

    // changes typing status
    setTypingActiveStatus: (states, action) => {
      states.isTypingActive = action.payload;
      console.log("tpying status changed");
    },
    setRestAllTypingStats: (states) => {
      states.cursor = 650;
      states.count = -1;
      states.isTypingActive = false;
    },
  },
});

export const {
  increaseCursors,
  decreaseCursors,
  increaseCounts,
  decreaseCounts,
  setTypingActiveStatus,
  setRestAllTypingStats,
} = typeStatSlice.actions;

export default typeStatSlice.reducer;
