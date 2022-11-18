import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Footer from "../components/Footer";
import RecupPass from "./RecupPass";
import Contact from "./Contact";
import Favorites from "./Favorites";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 mt-5 d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/recupPass" element={<RecupPass />}/>
          <Route path="/Favorites" element={<Favorites/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
