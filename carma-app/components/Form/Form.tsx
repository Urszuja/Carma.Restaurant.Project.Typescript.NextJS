import React from "react";
import StyledForm from "./Form.styled";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";

interface IFormInputs {
  firstName: string;
  phoneNumber: number;
}

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    //POST CLIENT DATA WITH ORDER
    window.localStorage.clear();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormInput type="string" />
      {/* first name input */}
      <label>Your name</label>
      <input
        {...register("firstName", {
          required: "This input is required.",
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "This input is for name only.",
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength.",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="firstName"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      {/* first name input */}
      <label>Your phone number</label>
      <input
        {...register("phoneNumber", {
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only.",
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength.",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="phoneNumber"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <input type="submit" />
    </StyledForm>
  );
}
