import React from "react";

function BirthDate(props: any) {
  const register = props.register
  const errors = props.errors;
  const form = props.form

  return (
    <>
      <input
        className="date"
        type="date"
        {...register(form, {
          required: "Birth Date is required",
          validate: (validate: string) => {
            if(Date.now() - Math.floor(new Date(validate).getTime()) < 568025136000){  
              return props.message
            }
          }
        })}
      ></input>
      <p className="errorMessage">{errors[form]?.message}</p>
    </>
  );
}

export default BirthDate;
