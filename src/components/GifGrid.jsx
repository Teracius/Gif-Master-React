import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ images, isLoading });
  //   const gifs = [1, 2, 3, 4, 5];
  //   const [counter, setCounter] = useState(10);
  //   const [images, setImages] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const getImages = async () => {
  //     const newImages = await getGifs(category);
  //     console.log(newImages);

  //     setImages(newImages);
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     getImages();
  //     // const newImages =getGifs(category);
  //     // setImages(mewImages);
  //   }, []);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}
      {/* <h2 className={isLoading}>Cargando...</h2> */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
