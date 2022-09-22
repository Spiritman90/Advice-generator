import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.adviceslip.com" }),
  endpoints: (builder) => ({
    getAdvice: builder.query({
      query: () => "/advice",
    }),
  }),
});

export const { useGetAdviceQuery } = apiSlice;
