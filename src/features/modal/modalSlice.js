import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isOpen: false,
  modalName: "text color"
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
        state.isOpen = true;
        state.modalName = action.payload
    },
    closeModal: (state, action) => {
        state.isOpen = false;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;