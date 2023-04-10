/** @format */

import React from "react";

import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'

import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <main className="py-2">
        <Container>
          {/* <h1>Some Title</h1> */}
          {/* <HomePage/> */}
          <Routes>
            <Route path='/' component={HomePage} exact />
            <Route path='/product/:id' component={ProductPage}/>
          </Routes>
        </Container>
      </main>
      <Footer />
      </Router>
    </>
  );
};

export default App;
