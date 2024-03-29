import React, { useContext, useState } from "react";
import StyledForm from "./Form.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import OrderInstance from "../../model/Order";
import Button from "../commons/Button/Button";
import Client, { Address } from "../../model/Client";
import Order from "../Order/Order";
import { DataStoreContext } from "../DataStoreContext";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";
import FormModal from "./FormModal";

export interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  zip: number;
  city: string;
  orderList: OrderInstance[];
  address2?: number;
}

export default function Form() {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const { cart, setCart } = useContext(DataStoreContext);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const address: Address = [data.address, data.zip, data.city, data.address2];
    const newClient = new Client(
      data.firstName,
      data.lastName,
      data.email,
      data.phoneNumber,
      address
    );
    const newOrder = cart && new OrderInstance(newClient, cart, "pending");

    //POST CLIENT DATA WITH ORDER
    fetch("http://localhost:5000/orderList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSuccess(false);
      });
    setTimeout(() => setShowModal(true), 1000);
  };

  const onCloseModal = async () => {
    if (isSuccess) {
      await router.push("/order/list");
      setCart([]);
    }
    setShowModal(false);
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
              value: /^[a-zA-Z0-9 .\/]*$/,
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
        <Order />
        <Button type="submit" text="Place order" />
      </div>
      {showModal && (
        <Modal onClose={onCloseModal} show={showModal}>
          <FormModal isSuccess={isSuccess} />
        </Modal>
      )}
    </StyledForm>
  );
}
