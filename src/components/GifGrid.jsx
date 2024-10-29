
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );



    return (
        <>
        <h3>{category} </h3>

        <h2>Cargando...</h2>
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
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
