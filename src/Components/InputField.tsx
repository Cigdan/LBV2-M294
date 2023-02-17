import { TextField } from "@mui/material";
import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

function InputField(props: any) {
  const errors = props.errors;
  const form = props.form;
  const type = props.type;

  return (
    <>
      <TextField
        label={props.name}
        variant="outlined"
        sx={{width: "100%"}}
        {...props.register(form, {
          required: props.name + " is required",
          maxLength: {
            value: 32,
            message: "Please enter a value under 32 characters",
          },
        })}
        type={type}
      />
      <p className="errorMessage">{errors[form]?.message}</p>
    </>
  );
}

export default InputField;
