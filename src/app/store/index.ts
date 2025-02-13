import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commentApi } from 'entities/comments';
import { newsApi } from 'entities/news';
import { uiReducer } from 'shared/uiSlice';

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  uiState: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(newsApi.middleware, commentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
