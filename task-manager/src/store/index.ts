import { configureStore } from '@reduxjs/toolkit';
import { sideMenuSlice, taskSlice, themeSlice } from './slices';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sideMenu: sideMenuSlice.reducer,
    task: taskSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
