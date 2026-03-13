    import getProducts from "@/lib/data/products";
    import { fakeStore } from "../api/api";
    import build from "next/dist/build";
    import { ProductResponse } from "@/lib/type/product-response";

    export const productApi = fakeStore.injectEndpoints({
        endpoints:(builder)=>({
            getProducts: builder.query<ProductResponse[],void>({
                query:()=>'/api/v1/products',
                providesTags:['products']
            }),
            addProduct: builder.mutation({
                query:(newProduct)=>({
                    url:'/api/v1/products',
                    method:"POST",
                    body:newProduct
                }),
                invalidatesTags:['products']
            }),
             getProductById: builder.query<ProductResponse, string>({
                query: (id) => `/api/v1/products/${id}`,
                providesTags: (result, error, id) => [{ type: "products", id }],
                }),
        })
    })

    export const {useGetProductsQuery,useAddProductMutation,useGetProductByIdQuery} = productApi