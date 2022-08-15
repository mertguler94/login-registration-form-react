import React from "react";

function FormButton(props) {
  return <button type={props.type}>{props.name}</button>;
}

export default FormButton;
