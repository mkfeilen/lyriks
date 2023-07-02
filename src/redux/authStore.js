import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { spotifyAuthApi } from './services/spotifyCore';

export const authStore = configureStore({
  reducer: {
    [spotifyAuthApi.reducerPath] : spotifyAuthApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyAuthApi.middleware)
});