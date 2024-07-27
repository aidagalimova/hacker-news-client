import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commentApi } from 'entities/comments';
import { newsApi } from 'entities/news';
import { uiReducer } from 'widgets/uiSlice';

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(newsApi.middleware, commentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
