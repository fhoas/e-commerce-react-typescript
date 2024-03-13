import React, { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { fields, inputStyles } from "../../../constants/shared/cropForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  area: yup.string().required("Area is required"),
});

const CropForm: React.FC = () => {
  const [formValues, setFormValues] = useState<Record<string, string>>({
    name: "",
    country: "",
    city: "",
    area: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form values:", formValues);
    setFormValues({
      name: "",
      country: "",
      city: "",
      area: "",
    });
  };

  

  return (
    <div className="h-full grid place-items-center">
      <form className="m-12 max-w-96" onSubmit={handleSubmit}>
        <h1 className="w-full text-center font-semibold text-2xl text-gray-700 mb-2">
          Crop Form
        </h1>

        {fields.map((field) => (
          <TextField
            key={field.id}
            className="w-full"
            id={field.id}
            label={field.label}
            variant="standard"
            style={inputStyles}
            onChange={handleChange}
            value={formValues[field.id]}
            // error
            // helperText="Incorrect entry."
          />
        ))}

        <Button
          type="submit"
          style={{ marginTop: "16px" }}
          className="w-full"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default CropForm;
