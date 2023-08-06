import { configureStore } from '@reduxjs/toolkit'
import { userApi } from 'src/entities/user/api/userApi'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import coreSlice from 'src/entities/core/slices/coreSlice';
import userSlice from 'src/entities/user/slices/userSlice';

const apiMiddlewares = [
  userApi.middleware,
]

export const store = configureStore({
  reducer: {
    coreSlice,
    userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector