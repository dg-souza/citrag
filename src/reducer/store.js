import { configureStore } from "@reduxjs/toolkit";
import roomSlicer from "./room";

export default configureStore({
    reducer: {
        room: roomSlicer.reducer
    }
})