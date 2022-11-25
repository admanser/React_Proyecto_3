import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import RecoveryPass from "../pages/RecoveryPass";
import Contact from "./Contact";
import Favorites from "./Favorites";
import Navbar2 from "../components/Navbar2";
import MovieDetailContainer from "../components/MovieDetailContainer";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 mt-0 d-flex flex-column min-vh-100">
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recoveryPass" element={<RecoveryPass />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDetailContainer />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
