import ProductsWrapper from "./ProductsWrapper";
import dataProducts from "../../data/Data";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(dataProducts);
  useEffect(() => {}, [dataProducts]);

  //   useEffect(() => {
  //     setProduct(dataProducts);
  //   }, [product]);
  return (
    <ProductsWrapper>
      <div className="row">
        {dataProducts.map((item, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="p-4">
                <div className="imgProduct">
                  <div className="filter">
                    <img src={item.url} alt="product" />
                  </div>
                  <div className="btns">
                    <button className="editBtn">
                      <ModeEditOutlineIcon />
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => {
                        console.log(i);
                        // navigate(0);
                        setProduct((prev) => {
                          prev.splice(i, i + 1);
                        });
                        console.log(dataProducts);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
                <div className="productInfo mt-3">
                  <p className="nameProduct text-center">{item.nameP}</p>
                  <p className="price text-center">{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ProductsWrapper>
  );
};

export default Products;
