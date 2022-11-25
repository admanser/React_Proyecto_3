import Advertising from '../components/Advertising';
import Category from "../components/Category";
import Hero from "../components/Hero";
import ListMoviesContainer from "../components/ListMoviesContainer";
import NextPremieres from '../components/NextPremieres';
// import CrudMovies from '../pages/CrudMovies';

const Landing = () => {
  return (
    <>
      <Hero />
      <ListMoviesContainer />
      <Advertising />
      <Category />
      <NextPremieres />
      {/* <CrudMovies /> */}
 </>
  )
}

export default Landing