import { createSlice } from "@reduxjs/toolkit";

export const TypingSenctenceSlice = createSlice({
  name: "TypingSenctenceSlice",
  initialState: {
    LetterToType: [],
    TypedLetter: [],
    IncorrectLetter: [],
    CharCount: 0,
    Words: 0,
  },
  reducers: {
    setLetterArray: (states, action) => {
      if (action.payload.length > 0) {
        states.LetterToType = action.payload;
        states.CharCount = action.payload.length;
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
    PushIncorrectLetter: (states, action) => {
      states.IncorrectLetter.push(action.payload);
    },
    PopIncorrectLetter: (states, action) => {
      states.IncorrectLetter.push(action.payload);
    },
  },
});

export const {
  setLetterArray,
  PushedTypedLetter,
  PopTypedLetter,
  setRestAllTypingSentences,
  PushIncorrectLetter,
  PopIncorrectLetter,
} = TypingSenctenceSlice.actions;

export default TypingSenctenceSlice.reducer;
