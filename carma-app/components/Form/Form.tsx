import React from "react";
import StyledForm from "./Form.styled";
import type Client from "../../model/Client";

function Form() {
  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    console.log(e.target);
  };

  return (
    <StyledForm action="#" method="post">
      <label htmlFor="first">First name:</label>
      <input
        type="text"
        id="first"
        name="first"
        min={2}
        max={30}
        required
        pattern="[A-Za-z]"
        autoFocus
        placeholder="first name"
      />
      <label htmlFor="last">Last name:</label>
      <input
        type="text"
        id="last"
        name="last"
        required
        min={2}
        max={50}
        pattern="[A-Za-z]"
        placeholder="last name"
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default Form;
