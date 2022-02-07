import Form from "../../components/form/Form";
import React from "react";
import { useNavigate } from "react-router-dom";
import dataProducts from "../../data/Data";

const CreateForm = ({ form }) => {
  const navigate = useNavigate();
  const submit = (data) => {
    dataProducts.push(data);
    console.log(data);

    navigate("../");
  };
  return (
    <>
      <h2 className="mb-4">Qo'shish</h2>
      <Form form={form} submit={submit} />
    </>
  );
};

export default CreateForm;
