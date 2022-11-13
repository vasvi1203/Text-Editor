import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isEmojiOpen: false
};

const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {
    toggleEmoji: (state, action) => {
        state.isEmojiOpen = !state.isEmojiOpen;
    }
  },
});

export const { toggleEmoji } = emojiSlice.actions;
export default emojiSlice.reducer;