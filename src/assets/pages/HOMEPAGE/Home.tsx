import React from "react";
import FirstSect from "./SectionsHome/FirstSect";
import Header from "../../Components/HEADER/Header";
import SecondSect from "./SectionsHome/SecondSect";
import ThirdSect from "./SectionsHome/ThirdSect";
import FourSect from "./SectionsHome/FourSect";

const Home = () => {
  return (
    <>
      <Header />
      <FirstSect />
      <SecondSect/>
      <ThirdSect/>
      <FourSect/>
    </>
  );
};

export default Home;
