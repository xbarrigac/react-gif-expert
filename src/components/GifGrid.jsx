// import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //const gifs = [1,2,3,4,5]
    const { images, isLoading } = useFetchGifs( category );

    // console.log( {images, isLoading} );

    // const [ counter, setCounter ] = useState(10);
    // const [ images, setImages ] = useState([]);
    // // const [ isLoading, setIsLoading ] = useState(true);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    //     // setIsLoading(false);
    // }
    
    // useEffect( () => {
    //     getGifs(category);
    //     getImages();
    // }, [])

    // getGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
/*                 isLoading
                ? ( <h2>Cargando...</h2> )
                : null */
                isLoading && ( <h2>Cargando...</h2> )
            }            
            {/*<p>Hola Mundo</p>
            {
                gifs.map( gif => (
                    <p>{ gif }</p>
                ))
            }*/}
            <div className="card-grid">
                {/* images.map... */}
                {
                    //images.map( ({ id, title, url }) => (
                    images.map( ( image ) => (
                        // <li key={ id }>{ title }</li>
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
            {/* <h5>{ counter }</h5>
            <button onClick={ () => setCounter( counter + 1)}>+1</button> */}
        </>
    )
}