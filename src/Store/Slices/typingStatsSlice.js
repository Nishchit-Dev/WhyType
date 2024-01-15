import { createSlice } from "@reduxjs/toolkit";

export const typeStatSlice = createSlice({
  name: "TypingStats",
  initialState: {
    typingActiveStatus: false,
    cursor: -1,
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
    setTypingActiveStatus: (states, action) => {
      states.typingActiveStatus = !states.typingActiveStatus;
    },
  },
});
