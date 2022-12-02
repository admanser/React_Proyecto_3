import Advertising from '../components/Advertising';
import Category from "../components/Category";
import Hero from "../components/Hero";
import ListMoviesContainer from "../components/ListMoviesContainer";
import NextPremieres from '../components/NextPremieres';
import Suscribite from '../components/Suscribite';
// import CrudMovies from './CrudMovies';

const Landing = () => {
  return (
    <>
      <Hero />
      <Suscribite/>
      <ListMoviesContainer />
      <Advertising />
      <Category />
      <NextPremieres />
      {/* <CrudMovies /> */}
 </>
  )
}

export default Landing