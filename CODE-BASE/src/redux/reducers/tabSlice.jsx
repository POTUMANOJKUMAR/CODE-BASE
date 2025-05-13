// redux/slices/tabSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTabs: {} // e.g., { usersTab: 0, settingsTab: 1 }
};

 export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      const { tabKey, index } = action.payload;
      console.log(action,index,"keyIndex")
      state.activeTabs[tabKey] = index;
    }
  }
});

export const { setActiveTab } = tabSlice.actions;

