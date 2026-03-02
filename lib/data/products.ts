import { ProductRequest } from "../type/product-response";

//fetch data from API products
const baseApi = process.env.NEXT_PUBLIC_API_URL;

export default async function getProducts(){
    const res = await fetch(`${baseApi}/api/v1/products`,{
        method:"GET",
        headers:{
            "Content-Type":"applciation/json"
        }
    })
    const data = await res.json();
    return data;
}

export async function InsertProduct(product:ProductRequest){
    const data = await fetch(`${baseApi}/api/v1/products`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
    })
    return await data.json();
}

