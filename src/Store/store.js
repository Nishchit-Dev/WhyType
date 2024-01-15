import { configureStore } from "@reduxjs/toolkit";

import { typeStatSlice } from "./Slices/typingStatsSlice";
import { TimerStatsSlice } from "./Slices/TimerStatsSlice";


export default configureStore({
    reducer:{
        typeStatsReducer:typeStatSlice,
        TimerStatsReducer:TimerStatsSlice,
    }
})
