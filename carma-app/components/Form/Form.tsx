import React from "react";
import StyledForm from "../styles/Form.styled";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../commons/input/FormInput";

interface IFormInputs {
  firstName: string;
  phoneNumber: number;
}

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    //POST CLIENT DATA WITH ORDER
    window.localStorage.clear();

    console.log(typeof errors);
    console.log(typeof register);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        name="firstName"
        label="first name"
        errors={errors}
        rules={{
          required: "This input is required.",
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "This input is for name only.",
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength.",
          },
        }}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
