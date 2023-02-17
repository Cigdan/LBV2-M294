import { TextField } from "@mui/material";
import React from "react";

function Password(props: any) {
  const errors = props.errors;
  const form = props.form;
  const type = props.type;

  return (
    <>
      <TextField
      label={props.name}
      sx={{width: "100%"}}
        {...props.register(form, {
          required: props.name + " is required",
          pattern: {
            value:
              props.regex,
            message:
              props.message,
          },
        })}
        type={type}
        placeholder={props.name}
      />
      <p className="errorMessage">{errors[form]?.message}</p>
    </>
  );
}

export default Password;
