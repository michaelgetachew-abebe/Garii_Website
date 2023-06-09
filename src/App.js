import React from "react";
import "./app.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Support from "./components/Support/Support";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Main />
      <Team />
      <Support />
      <Footer />
    </>
  );
};

export default App;
