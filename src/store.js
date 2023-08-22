import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";
//modeReducer is an abritrary name, it can be anything

const store = configureStore({
    reducer: {
        //taking the imported mode
        mode: modeReducer
    }
})

export default store