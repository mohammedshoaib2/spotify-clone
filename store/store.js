import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "../features/playerSlice";

const store = configureStore({
  reducer: {
    playerSlice: playerSlice,
  },
});

export { store };
