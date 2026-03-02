import { StaticImageData } from "next/image"
import a1 from "@/components/photos/a1.jpg"
import a2 from "@/components/photos/a2.jpg"
import a3 from "@/components/photos/a3.jpg"
import a4 from "@/components/photos/a4.jpg"
import a5 from "@/components/photos/a5.jpg"
import a6 from "@/components/photos/a6.jpg"
import a7 from "@/components/photos/a7.jpg"

export type AnimalType = {
    id:string,
    title:string,
    src:StaticImageData
}

export const animalList : AnimalType[] =[
    {
        id:"1",
        title:"Animal One",
        src:a1
    },{
        id:"2",
        title:"Animal Twp",
        src:a2
    },{
        id:"3",
        title:"Animal Three",
        src:a3
    },{
        id:"4",
        title:"Animal Four",
        src:a4
    },{
        id:"5",
        title:"Animal Five",
        src:a5
    },{
        id:"6",
        title:"Animal Six",
        src:a6
    },{
        id:"7",
        title:"Animal Seven",
        src:a7
    }
    
]