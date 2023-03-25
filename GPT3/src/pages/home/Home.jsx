import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibiliy,
  WhatGPT3,
} from "./containers";
import { Brand, CTA, Chat, Navbar } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Chat/>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibiliy />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
};

export default Home;
