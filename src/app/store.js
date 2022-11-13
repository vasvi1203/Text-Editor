import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modalSlice'
import emojiReducer from '../features/emoji/emojiSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    emoji: emojiReducer
  },
})
