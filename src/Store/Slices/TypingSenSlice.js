import { createSlice } from "@reduxjs/toolkit";

export const TypingSenctenceSlice = createSlice({
  name: "TypingSenctenceSlice",
  initialState: {
    LetterToType: [],
    TypedLetter: [],
    CharCount: 0,
    Words: 0,
  },
  reducers: {
    setLetterArray: (states, action) => {
      if (action.payload.length > 0) {
        states.LetterToType = action.payload;
        states.CharCount = action.payload.length;
        console.log(states.LetterToType);
      }
    },
    PushedTypedLetter: (states, action) => {
      states.TypedLetter.push(action.payload);
    },
    PopTypedLetter: (states, action) => {
      states.TypedLetter.pop();
    },
    setRestAllTypingSentences: (states) => {
      states.LetterToType = [];
      states.TypedLetter = [];
      states.CharCount = 0;
    },
  },
});

export const {
  setLetterArray,
  PushedTypedLetter,
  PopTypedLetter,
  setRestAllTypingSentences,
} = TypingSenctenceSlice.actions;

export default TypingSenctenceSlice.reducer;
