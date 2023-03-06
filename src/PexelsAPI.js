import React, { useState, useEffect } from "react";
import axios from "axios";

const PexelsAPI = () => {
  const [images, setImages] = useState([]);
  const API_KEY = "563492ad6f9170000100000125f6d5d52d1f432b83f152596f4ce9a4";
  const query = "rural africa happy children";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/search?query=${query}&per_page=500`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((response) => {
        setImages(response.data.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // Change image every 1 minute (60,000 milliseconds)
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <img
        src={images[index]?.src?.medium}
        alt={images[index]?.photographer}
        key={images[index]?.id}
      />
    </div>
  );
};

export default PexelsAPI;
