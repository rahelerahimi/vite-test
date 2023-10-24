import React from "react";
import Hero from "./assets/components/hero/heropage/Hero";
import Persian from "./assets/components/persian/persianThings/Persian";
import Services from "./assets/components/service/Services";
import AllbestWeek from "./assets/components/bestweek/allbestweek/AllbestWeek";
import Tabproducts from "./assets/components/tablatestproducts/tabproducts/Tabproducts";
import _Slider from "./assets/components/sliderimagetext/slider/_Slider";
import BestSelling from "./assets/components/bestselling/BestSelling";
import BeautifulIran from "./assets/components/beautifuliran/BeautifulIran";
import ReadAbout from "./assets/components/readabout/ReadAbout";
import Blog from "./assets/components/blog/Blog";
import Footer from "./assets/components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Persian />
      <Services/>
      <AllbestWeek />
      <Tabproducts />
      <_Slider />
      <BestSelling />
      <BeautifulIran />
      <ReadAbout />
      <BestSelling />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
