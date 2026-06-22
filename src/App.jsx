import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <section className="inner-container">
        <Header />
        <Footer />
      </section>
    </div>
  );
};

export default App;
