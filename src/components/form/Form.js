import React from "react";
import { useForm } from "react-hook-form";
import FormWrapper from "./FormWrapper";
import dataProducts from "../../data/Data";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Form() {
  let a = dataProducts.length + 1;
  a.toString();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.nameP == "" || data.price == "" || data.url == "") return;
    dataProducts.push(data);
    data.id = a;
    navigate(-1);
    console.log(dataProducts);
  };

  console.log(watch("example"));

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header />
      <h1 className="text-center">Qoshish</h1>

      <div className="row">
        <div className="col-8 p-3">
          <input
            className="form-control"
            placeholder="Product Name"
            {...register("nameP")}
          />
        </div>
        <div className="col-8 p-3">
          <input
            className="form-control"
            placeholder="Product Price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="col-8 p-3">
          {" "}
          <input
            className="form-control"
            placeholder="Product Image Link"
            {...register("url", { required: true })}
          />
        </div>
      </div>

      <div className="btns">
        <button className="btn btn-primary me-3" type="submit">
          Add
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Home
        </button>
      </div>
      {/* <Link to="add">
        <button className="btn btn-warning">
          <FontAwesomeIcon icon={faBackward} className="me-2" />
        </button>
      </Link> */}
    </FormWrapper>
  );
}
