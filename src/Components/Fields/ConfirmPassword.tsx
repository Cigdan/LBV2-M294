import { TextField } from "@mui/material";
import React from "react";

function ConfirmPassword(props: any) {
  const errors = props.errors;
  

  return (
    <>
      <TextField
        label="Confirm Password"
        sx={{width: "100%"}}
        {...props.register("confirmPassword", {
          required: "Confirm your password",
          validate: (validate: string) => {
            if(props.watch("password") !== validate){
                return "Passwords don't match"
            }
          }
        })}
        type="password"
        placeholder="Confirm Password"
      />
      <p className="errorMessage">{errors["confirmPassword"]?.message}</p>
    </>
  );
}

export default ConfirmPassword;
