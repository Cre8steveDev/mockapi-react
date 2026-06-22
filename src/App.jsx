import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <section className="inner-container">
        <Header />
        <Footer />
      </section>
    </BrowserRouter>
  );
};

export default App;
