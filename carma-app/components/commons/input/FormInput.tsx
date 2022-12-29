import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import StyledFormInput from "../../styles/FormInput.styled";

export interface IFormInput {
  name: string;
  register: any;
  errors: any;
}

function FormInput({ name, register, errors }: IFormInput) {
  let pattern: RegExp;

  return (
    <div>
      <StyledFormInput type="text" />
      {/* first name input */}
      <label>Your {name}</label>
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
    </div>
  );
}

export default FormInput;
