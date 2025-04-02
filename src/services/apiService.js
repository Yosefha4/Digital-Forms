import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = window.location.hostname === "localhost" ? "/devapi" : "/api";


const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });


export const apiService = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getStreets: builder.query({
      query: (data) => ({
        url: `/Streets?city=${data.city}`, //TODO: USE REAL ENDPOINT
      }),
    }),
  }),
});

export const { useLazyGetStreetsQuery } = apiService;
