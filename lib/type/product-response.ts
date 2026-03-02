export  type ProductResponse= {
    id:number;
    title:string;
    // slug:string;
    price:number;
    description:string;
    // category:ProductResponseCategory;
    images:string[];
}

export  type ProductResponseCategory = {
    id:number;
    name:string;
    slug:string;
}

export type ProductRequest ={   
    title:string;
    price:number;
    description:string;
    categoryId:string;
    images:string[]
}