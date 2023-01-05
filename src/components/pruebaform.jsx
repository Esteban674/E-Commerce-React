import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function Prueba() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input {...register("name", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.name?.type === "required" && <p>El nombre es requerido</p>}
      {errors?.name?.type === "maxLength" && (
        <p>El nombre no debe exceder los 20 caracteres</p>
      )}
      {errors?.name?.type === "pattern" && (
        <p>Solo caracteres alfabéticos</p>
      )}
      <label>Telefono</label>
      <input {...register("phone", { required: true, maxLength: 18,})} />
      {errors?.phone?.type === "required" && <p>El telefono es requerido</p>}
      {errors?.phone?.type === "maxLength" && (
        <p>El Telefono no debe exceder los 18 caracteres</p>
      )}
      <label>E-mail</label>
      <input
        type="text"
        {...register("email", {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      {errors?.email?.type === "required" && <p>El e-mail es requerido</p>}
      {errors?.email?.type === "pattern" && (
        <p>Formato de e-mail no valido</p>
      )}
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Prueba />, rootElement);