import { createSlice } from '@reduxjs/toolkit';

interface uiSchema {
  popUp: {
    isDisplay: boolean;
  };
}

const initialState: uiSchema = {
  popUp: {
    isDisplay: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showPopUp: (state) => {
      state.popUp.isDisplay = true;
    },
    hideModal: (state) => {
      state.popUp.isDisplay = false;
    },
  },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
