import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import AddProduct from "./pages/qoshish/AddProduct";
import Form from "./components/form/Form";
class App extends Component {
  render() {
    return (
      <div className="container py-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/add" element={<Form />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
