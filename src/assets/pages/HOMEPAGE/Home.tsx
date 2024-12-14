import React from "react";
import FirstSect from "./SectionsHome/FirstSect";
import Header from "../../Components/HEADER/Header";
import SecondSect from "./SectionsHome/SecondSect";

const Home = () => {
  return (
    <>
      <Header />
      <FirstSect />
      <SecondSect/>
    </>
  );
};

export default Home;
