import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import RecoveryPass from "../pages/RecoveryPass";
import Contact from "./Contact";
import Favorites from "./Favorites";
import AboutUs from "./AboutUs";
import Navbar2 from "../components/Navbar2";
import MovieDetailContainer from "../components/MovieDetailContainer";
import CrudMovies from "../pages/CrudMovies";
import SignUp from "../components/SignUp";
import ListCategoryContainer from "../components/ListCategoryContainer";

const Main = ({
  auth,
  validate,
  login,
  logout,
  loggedIn,
  loggedAdmin,
  setAuth,
}) => {
  return (
    <>
      <Navbar
        auth={auth}
        validate={validate}
        login={login}
        logout={logout}
        loggedIn={loggedIn}
        loggedAdmin={loggedAdmin}
        setAuth={setAuth}
      />
      <Navbar2 />
      <div className="mt-0 d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recoveryPass" element={<RecoveryPass />} />;
          <Route
            path="/Favorites"
            element={
              auth.userName ? (
                <Favorites />
              ) : (
                <NotFound message="Primero debes loguearte" />
              )
            }
          />{" "}
          ;
          <Route
            path="CrudMovies"
            element={auth.role === "admin" ? <CrudMovies /> : <NotFound />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/MovieDetailContainer/:id" element={<MovieDetailContainer />} />
          <Route path="/ListCategoryContainer/:category" element={<ListCategoryContainer />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
