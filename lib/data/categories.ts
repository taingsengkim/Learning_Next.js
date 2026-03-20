const baseApi = process.env.NEXT_PUBLIC_API_URL;

export async  function getCategories(){
    const res = await fetch(`${baseApi}/categories`);
    return await res.json()
}