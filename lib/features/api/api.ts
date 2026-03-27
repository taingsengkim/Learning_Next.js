import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStore = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl : "/api"
    }),
    tagTypes:['products','categories'],
    endpoints:()=>({})
})