import React from 'react';
import Advertising from '../components/Advertising';
import Category from "../components/Category";
import Hero from "../components/Hero";
import ListFilms from "../components/ListFilms";
import NextPremieres from '../components/NextPremieres';


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