import React, { useState, useEffect } from "react";
import MovieDetail from "./MovieDetail";
import { useParams } from "react-router-dom";

const MovieDetailContainer = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return <MovieDetail data={data} />;
};

export default MovieDetailContainer;
