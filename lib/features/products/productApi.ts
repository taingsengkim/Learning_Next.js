    import getProducts from "@/lib/data/products";
    import { fakeStore } from "../api/api";
    import build from "next/dist/build";
    import { ProductResponse } from "@/lib/type/product-response";

    export const productApi = fakeStore.injectEndpoints({
        endpoints:(builder)=>({
            getProducts: builder.query<ProductResponse[],void>({
                query:()=>'/products',
                providesTags:['products']
            }),
             getCategories: builder.query<ProductResponse[],void>({
                query:()=>'/categories',
                providesTags: ['categories']
            }),
            addProduct: builder.mutation({
                query:(newProduct)=>({
                    url:'/products',
                    method:"POST",
                    body:newProduct
                }),
                invalidatesTags:['products']
            }),
             getProductById: builder.query<ProductResponse, string>({
                query: (id) => `/products/${id}`,
                providesTags: (result, error, id) => [{ type: "products", id }],
                }),
            deleteProdut: builder.mutation({
                query:(id)=>({
                    url:`/products/${id}`,
                    method:"DELETE"
                }),
                invalidatesTags:['products']
            }),
            updateProduct: builder.mutation({
                query:({id,...body})=>({
                    url:`/products/${id}`,
                    method:"PUT",
                    body
                }),
                invalidatesTags:['products']
            }),
           uploadImg: builder.mutation<{ location: string }, FormData>({
            query: (formData) => ({
                url: `/files/upload`,
                method: "POST",
                body: formData,
            }),
            }),
        })
    })

    export const {useGetProductsQuery,useGetCategoriesQuery,useAddProductMutation,useGetProductByIdQuery,useDeleteProdutMutation,useUpdateProductMutation,useUploadImgMutation} = productApi