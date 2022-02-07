import React from "react";
import Header from "../../components/header/Header";
import MainWrapper from "./MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/form/Form";
import { Link, Route, Routes } from "react-router-dom";
const Main = () => {
  const addPage = () => {
    console.log("to go");
  };
  return (
    <MainWrapper>
      <Header />
      <div className="">
        <h1 className="text-center">Maxsulotlar</h1>
        <Link to="add">
          <button className="btn plus">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
          </button>
        </Link>
      </div>
      <Products />
      <Footer />
    </MainWrapper>
  );
};

export default Main;
