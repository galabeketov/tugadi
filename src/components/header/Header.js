import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderWrapper from "./HeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="d-flex justify-content-between">
        <p className="fw-bold">Furniutr.</p>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} className="me-2" />
        </button>
      </div>
      <div>
        <p className="text-center mt-5 mainText">
          Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
        </p>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
