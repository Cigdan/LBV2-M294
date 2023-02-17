import React from "react";

import "/node_modules/flag-icons/css/flag-icons.min.css";
const countries: Icountries[] = require("../Countries.json");

interface Icountries {
  name: string;
  code: string;
}

function SelectionField(props: any) {
  const errors = props.errors;
  const form = props.form;

  const countryList = countries.map((country: Icountries) => (
    <option
      key={country.code}
      value={country.name}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <p className="country">{country.name}</p>
    </option>
  ));

  return (
    <>
      <select
        style={{ width: "100%", height: "55px" }}
        {...props.register(form, {
          required: props.name + " is required",
        })}
      >
        {countryList}
      </select>
      <p className="errorMessage">{errors[form]?.message}</p>
    </>
  );
}

export default SelectionField;
