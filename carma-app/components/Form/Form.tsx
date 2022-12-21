import React from "react";
import StyledForm from "./Form.styled";
import type Client from "../../model/Client";
import { useForm, SubmitHandler } from "react-hook-form";

//to be replaced by client
// order for client comes from
type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
};

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    //POST CLIENT DATA WITH ORDER
    window.localStorage.clear();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* First name input*/}
      <label>Your first name:</label>
      {errors.firstName && <span>Name is required</span>}
      <input
        {...register("firstName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
          minLength: 2,
          maxLength: 20,
        })}
      />

      {/* Last name input */}
      <label>Your last name:</label>
      {errors.lastName && <span>Last name is required</span>}
      <input
        {...register("lastName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
          minLength: 2,
          maxLength: 50,
        })}
      />
      {/* Phone number input */}
      {/* <label>Your phone:</label>
      {errors.phoneNumber && <span>Phone number is required</span>}
      <input
        defaultValue="phone number"
        {...register("phoneNumber", {
          required: true,
          pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        })}
      /> */}

      {/* Submit button  */}

      <input id="submitButton" type="submit" />
    </StyledForm>
  );
}

export default Form;
