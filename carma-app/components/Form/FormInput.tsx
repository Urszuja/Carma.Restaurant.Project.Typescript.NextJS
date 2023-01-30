import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import StyledFormInput from "./FormInput.styled";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IFormInputs } from "./Form";

export interface IFormInput {
  name: string;
  control: Control<any, object>;
  errors: FieldErrors<IFormInputs>;
  label: string;
  rules?: {};
}

function FormInput({ name, control, rules, errors, label }: IFormInput) {
  let pattern: RegExp;

  return (
    <StyledFormInput>
      {/* first name input */}

      <label htmlFor={name}>Your {label}</label>
      <Controller
        control={control}
        name={name}
        rules={rules ?? {}}
        render={({ field }) => (
          <input
            role={name}
            value={field.value ?? ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p role="alert" key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />
    </StyledFormInput>
  );
}

export default FormInput;
