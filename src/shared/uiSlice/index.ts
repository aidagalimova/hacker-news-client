import { createSlice } from '@reduxjs/toolkit';

interface UiSchema {
  popUp: {
    isDisplay: boolean;
  };
}

const initialState: UiSchema = {
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
    hidePopUp: (state) => {
      state.popUp.isDisplay = false;
    },
  },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
