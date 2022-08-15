import React from "react";
import InputField from "./InputField";
import FormButton from "./FormButton";

function Form(props) {
  return (
    <form className="form">
      <InputField type="text" placeholder="Username" />
      <InputField type="password" placeholder="Password" />
      {!props.userIsRegistered && (
        <InputField type="password" placeholder="Confirm Password" />
      )}
      <FormButton
        type="submit"
        name={props.userIsRegistered ? "Login" : "Register"}
      />
    </form>
  );
}

export default Form;
