/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <>
      <Header />
      <main className="py-2">
        <Container>
          {/* <h1>Some Title</h1> */}
          <HomePage/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
