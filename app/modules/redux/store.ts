import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {tokenApi} from './api/token.api';
import tokenPairs from './slices/tokenPairs';

const rootReducer = combineReducers({
  [tokenApi.reducerPath]: tokenApi.reducer,
  tokenPairs,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
