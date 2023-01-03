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
      <div className="inputs">
        <label className="section"> Your personal data</label>
        <FormInput
          control={control}
          name="firstName"
          label="first name*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This input is for name only.",
            },
            minLength: {
              value: 2,
              message: "This input is too short.",
            },
            maxLength: {
              value: 30,
              message: "This input is too long.",
            },
          }}
        />
        <FormInput
          control={control}
          name="lastName"
          label="last name*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This input is for last name only.",
            },
            minLength: {
              value: 2,
              message: "This input is too short.",
            },
            maxLength: {
              value: 30,
              message: "This input is too long.",
            },
          }}
        />

        <FormInput
          control={control}
          name="company"
          label="company"
          errors={errors}
          rules={{
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "This input is for company name only.",
            },
            minLength: {
              value: 2,
              message: "This input is too short.",
            },
            maxLength: {
              value: 30,
              message: "This input is too long.",
            },
          }}
        />
        <FormInput
          control={control}
          name="email"
          label="e-mail*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value:
                /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
              message: "This input is for e-mail only",
            },
          }}
        />
        <FormInput
          control={control}
          name="phone"
          label="phone number*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/,
              message: "This input is for phone number only",
            },
          }}
        />
        <label className="section">Your Address</label>
        <FormInput
          control={control}
          name="address"
          label="address (street + home number)*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value: /^[a-zA-Z0-9 ]*$/,
              message: "This input is for address only.",
            },
            minLength: {
              value: 2,
              message: "This input is too short.",
            },
            maxLength: {
              value: 50,
              message: "This input is too long.",
            },
          }}
        />
        <FormInput
          control={control}
          name="address2"
          label="flat number"
          errors={errors}
          rules={{
            pattern: {
              value: /[0-9]{1,4}/,
              message: "This input is for flat number only.",
            },
            minLength: {
              value: 1,
              message: "This input is too short.",
            },
            maxLength: {
              value: 4,
              message: "This input is too long.",
            },
          }}
        />
        <FormInput
          control={control}
          name="zip"
          label="zip code*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value: /([0-9]{2}-[0-9]{3})|(^\d{5}(?:[-\s]\d{4})?$)/,
              message: "This input is for zip number only.",
            },
          }}
        />
        <FormInput
          control={control}
          name="city"
          label="city*"
          errors={errors}
          rules={{
            required: "This input is required.",
            pattern: {
              value:
                /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
              message: "This input is for city only.",
            },
            minLength: {
              value: 2,
              message: "This input is too short.",
            },
            maxLength: {
              value: 30,
              message: "This input is too long.",
            },
          }}
        />
        <label className="section">Your special wishes</label>
        <FormInput
          control={control}
          name="wishes"
          label="wishes"
          errors={errors}
          rules={{
            pattern: {
              value: /^[a-zA-Z0-9 ]*$/,
              message: "This input is for your wishes.",
            },
          }}
        />
      </div>
      <div className="order">
        <div>Here goes Order List</div>
        <button type="submit">Submit</button>
      </div>
    </StyledForm>
  );
}