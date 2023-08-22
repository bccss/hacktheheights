import React from "react";
import slides  from './data/photoCarouselData.json'
// import Button from '@mui/material/Button';
import { AppBar, Container } from "@mui/material";
import Header from "./Header";
import {
  LandingSplash,
  About,
  Team,
  FAQ,
  Events,
  Sponsors,
  PhotoCarousel,
  Footer,
} from "./index.js";

export const Home = () => {
  return (
    <div>
      <Header />
      <Container sx={{ bgcolor: "#F6EEE3", height: "100vh" }}>
        <LandingSplash />
        <About />
        <Team />
        <FAQ />
        <Events />
        <Sponsors />
        <PhotoCarousel data={slides} />
      </Container>
      <Footer />
    </div>
  );
};
