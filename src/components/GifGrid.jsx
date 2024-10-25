import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );



    return (
        <>
            <h3>{category} </h3>


        <div className="card-grid">

            {
                images.map (img => {
                    return (
                        <GifGridItem
                         key={img.id}
                         title={img.title}
                         url={img.url}
                         />
                        // <li key={img.id}>{img.title} </li>
                    )
                })
            }
        </div>
        
        
        </>
    )
}

