import { createSlice } from "@reduxjs/toolkit";

export const TypingSenctenceSlice = createSlice({
  name: "TypingSenctenceSlice",
  initialState: {
    LetterToType: [],
    TypedLetter: [],
    IncorrectLetter: [],
    SecondsWhenPress: [],
    CharCount: 0,
    Words: 0,
    StartedAt: 0,
    TimerDifference: [],
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
      states.SecondsWhenPress = [];
      states.IncorrectLetter = [];
      states.CharCount = 0;
      states.TimerDifference = [];

      states.Words = 0;
    },
    PushIncorrectLetter: (states, action) => {
      states.IncorrectLetter.push(action.payload);
    },
    PopIncorrectLetter: (states, action) => {
      states.IncorrectLetter.push(action.payload);
    },
    PushSeconds: (states, action) => {
      states.SecondsWhenPress.push({
        data: action.payload,
      });
    },
    PopSeconds: (states, action) => {
      states.SecondsWhenPress.pop();
    },
    setTimeDifferenceArray: (states, action) => {
      console.log(action.payload)
      states.TimerDifference = [...action.payload];
    },
  },
});

export const {
  setLetterArray,
  PushedTypedLetter,
  PopTypedLetter,
  setRestAllTypingSentences,
  PushIncorrectLetter,
  PopSeconds,
  PushSeconds,setTimeDifferenceArray,
  PopIncorrectLetter,
} = TypingSenctenceSlice.actions;

export default TypingSenctenceSlice.reducer;
