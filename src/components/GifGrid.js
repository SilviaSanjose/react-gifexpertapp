import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGif();
    }, []);

    const getGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=q7GsWJMiOp6JXymWFFHrRZVqSSaSBNDD`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url, //? para indicar "si aparece"
            };
        });
        //console.log(gifs);
        setImages(gifs); //guardo el resultado en images
    };

    //getGif();
    return (
        <>
            <h3>{category}</h3>

            {images.map((img) => (
                <GifGridItem key={img.id} {...img} /> //{...img} operador spread desestructura el objeto.
            ))}
        </>
    );
};

export default GifGrid;
