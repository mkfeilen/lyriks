import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const deezerCoreApi = createApi({
    reducerPath: 'deezerCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8308e3b24emsh19e1a25bf536163p1bde5cjsn9af174d2280b');
            //headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        search: builder.query({ query: () => '/search?q=beyonce'}),
    })
});

export const {
    useSearchQuery
} = deezerCoreApi;