import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { count } from 'src/store/count';
import { token } from 'src/store/token';
import { todos } from 'src/store/todos';
import { user } from 'src/store/user';
import { items } from './items';

export const store = configureStore({
  reducer: {
    items,
    count,
    token,
    todos,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          url: 'https://jsonplaceholder.typicode.com/',
          version: '1',
        },
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ExtraParams = { url: string; version: string };
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, ExtraParams, AnyAction>;
