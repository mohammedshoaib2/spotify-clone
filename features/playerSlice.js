import { createSlice } from "@reduxjs/toolkit";
import { songsData } from "./../src/assets/assets";

const initialData = {
  currentSong: songsData[0],
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: initialData,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state, action) => {
      state.isPlaying = !state.isPlaying;
    },

    togglePlayTrue: (state, action) => {
      state.isPlaying = true;
    },
  },
});

export const { setCurrentSong, togglePlay, togglePlayTrue } =
  playerSlice.actions;
export default playerSlice.reducer;
