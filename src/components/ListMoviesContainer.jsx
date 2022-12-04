import React, {useState, useEffect } from 'react';
import ListMovie from './ListMovie';

const ListMoviesContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://backend-proyecto3-cpzv4av54-admanser.vercel.app/viewmovies')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);

  return (
    <ListMovie data={data} />
  );
};

export default ListMoviesContainer;