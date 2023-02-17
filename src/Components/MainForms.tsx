import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { Grid, Box, Button } from "@mui/material";
import InputField from "./InputField";
import ValidatedField from "./Fields/ValidatedFields";
import ConfirmPassword from "./Fields/ConfirmPassword";
import SelectionField from "./SelectionField";
import BirthDate from "./Fields/BirthData";

function MainForms() {
  type FormValues = {
    name: string;
    address: string;
    city: string;
    phoneNumber: string;
    postcode: string;
    country: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    idConfirmation: string;
  };


  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      address: "",
      city: "",
      phoneNumber: "",
      postcode: "",
      country: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      idConfirmation: "",
    },
  });

  return (
    <Box className="formContainer">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Grid
          container
          columnSpacing={2}
          rowSpacing={1}
          sx={{ width: "30%", marginTop: "40px", marginBottom: "40px" }}
        >
          <Grid item md={6}>
            <ValidatedField
              register={register}
              errors={errors}
              form="username"
              name="Username"
              regex={/^[A-Za-zäöü0-9_]{3,16}$/}
              message="Username must be between 3 and 16 Characters / only use Numbers letters and Underscores"
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              register={register}
              name="Name"
              form="name"
              errors={errors}
              regex={/^[A-Zäöü ]{1,32}$/i}
              message="Name may only contain letters / can be up to 32 Characters long"
            />
          </Grid>
          <Grid item md={6}>
            <SelectionField
              register={register}
              name="Country"
              form="country"
              errors={errors}
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              register={register}
              name="City"
              form="city"
              errors={errors}
              regex={/^[A-Za-zäöü ]{1,32}$/}
              message="City may only contain letters / up to 32 Characters long"
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              register={register}
              name="Postal Code"
              form="postcode"
              errors={errors}
              regex={/^[0-9]{1,10}$/}
              message="Invalid Postal Code"
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              register={register}
              name="Address"
              form="address"
              errors={errors}
              regex={/^[A-Za-zäöü0-9 ]{3,64}$/}
              message="Only use Alphanumerics / can be up to 64 Characters long"
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              register={register}
              name="Phone Number"
              form="phoneNumber"
              regex={/^\+(?:[0-9] ?){6,14}[0-9]$/}
              errors={errors}
              message="Invalid Phone Number"
            />
          </Grid>
          <Grid item md={6}>
            <BirthDate register={register} errors={errors} form="dateOfBirth" message="You have to be 18 Years old to register"/>
          </Grid>
          <Grid item md={12}>
            <ValidatedField
              register={register}
              name="Email"
              form="email"
              errors={errors}
              regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
              message="Invalid Email Address"
            />
          </Grid>
          <Grid item md={6}>
            <ValidatedField
              type="password"
              register={register}
              errors={errors}
              form="password"
              name="Password"
              watch={watch}
              regex={
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,128}$/
              }
              message="Must contain between 8 - 128 Characters, 1+ Uppercase Letter, 1+ Lowercase Letter, 1+ Number, 1+ Special Character (#?!@$%^&*-)"
            />
          </Grid>
          <Grid item md={6}>
            <ConfirmPassword
              register={register}
              errors={errors}
              watch={watch}
            />
          </Grid>
          <Grid item md={12}>
            <input
              {...register("idConfirmation", {
                required: "Please upload an image of your ID",
                validate: (validate: any) => {
                  if(validate[0]["type"] !== "application/pdf" && validate[0]["type"] !== "application/png" && validate[0]["type"] !== "application/jpg"){
                      return "Invalid Filetype. Try PDF, PNG or JPG"
                  }
                }
              })}
              type="file"
              placeholder="Upload ID"
            />
            <p className="errorMessage">{errors.idConfirmation?.message}</p>
          </Grid>
          <Grid item md={12}>
            <Button variant="outlined" type="submit" >Register</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default MainForms;
