import React from 'react';
import Advertising from './Advertising';
import Category from "./Category";
import Hero from "./Hero";
import ListFilms from "./ListFilms";
import NextPremieres from './NextPremieres';


const Landing = () => {
  return (
    <>
      <Hero />
      <ListFilms />
      <Advertising />
      <Category />
      <NextPremieres />
 </>
  )
}

export default Landing