import * as yup from "yup";


export const basicSchema = yup.object().shape({
  
  firstname: yup
    .string()
    .min(3, "Firstname must be at least 3 characters long")
    .required("Required"),
    lastname: yup
    .string()
    .min(2, "Lastname must be at least 2 characters long")
    .required("Required"),
    age: yup.number().positive().integer().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    description: yup
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(255,"Description should not be more than 255 characters long")
    .required("Required")
 
});