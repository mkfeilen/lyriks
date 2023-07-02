import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


var client_id = '95670773dced4a5280e6d4e5dd878bbc'; // Your client id
var client_secret = '72ac5d1a38b544f691843977e08dcfb6'; // Your secret
var redirect_uri = 'http://localhost:3000'; // Your redirect uri
var scope = 'user-read-private user-read-email';

// export const spotifyCoreApi = createApi({
//   reducerPath: 'spotifyCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: '',
//     prepareHeaders: (headers) => {
//       headers.set('', '');

//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     search: builder.query({ query: () => '/' }),
//   })
// });

// export const {
//   useSearchQuery
// } = spotifyCoreApi;


// export const spotifyAuthApi = createApi({
//   reducerPath: 'spotifyAuthApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://accounts.spotify.com/api',
//     prepareHeaders: (headers) => {
//       headers.set('Content-Type', 'application/x-www-form-urlencoded');
//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     authorise: builder.query({ query: () => `/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${generateRandomString(16)}`}),
//     token: builder.query({ query: () => `/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}` }),
//   })
// });

// export const {
//   useAuthoriseQuery,
//   useTokenQuery
// } = spotifyAuthApi;



// const generateRandomString = function (length) {
//   var text = '';
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };



export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8308e3b24emsh19e1a25bf536163p1bde5cjsn9af174d2280b');
      // headers.set('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    searchTracks: builder.query({ query: () => '/search?type=tracks&q=beyonce' }),
  })
});

export const {
  useSearchTracksQuery
} = spotifyCoreApi;
