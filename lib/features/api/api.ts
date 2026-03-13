import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStore = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl : process.env.NEXT_PUBLIC_API_URL
    }),
    tagTypes:['products'],
    endpoints:()=>({})
})