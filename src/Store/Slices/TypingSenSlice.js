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
        states.CharCount = action.payload.length();
      }
    },
    PushedTypedLetter: (states, action) => {
      states.TypedLetter.push(action.payload);
    },
    PopTypedLetter: (states, action) => {
      states.TypedLetter.pop();
    },
  },
});

export const { setLetterArray,PushedTypedLetter,PopTypedLetter } = TypingSenctenceSlice.actions;

export default TypingSenctenceSlice.reducer;
