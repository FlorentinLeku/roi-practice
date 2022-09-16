import { useFormik } from "formik";
import { basicSchema } from "../Schemas/BasicSchema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};


const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname:"",
      lastname:"",  
      email: "",
      age: "",
      description:"",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (

    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="firstname">Firstname</label>
      <input
        value={values.firstname}
        onChange={handleChange}
        id="firstname"
        type="text"
        placeholder="Enter your firstname"
        onBlur={handleBlur}
        className={errors.firstname && touched.firstname ? "input-error" : ""}

      />

<form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="lastname">Lastname</label>
      <input
        value={values.lastname}
        onChange={handleChange}
        id="lastname"
        type="text"
        placeholder="Enter your lastname"
        onBlur={handleBlur}
        className={errors.lastname && touched.lastname ? "input-error" : ""}
      />


    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}

      />

<form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="description">Description</label>
      <input
        value={values.description}
        onChange={handleChange}
        id="description"
        type="text"
        placeholder="Enter your description"
        onBlur={handleBlur}
        className={errors.description && touched.description ? "input-error" : ""}

      />

     
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
    </form>
    </form>
    </form>
  );
};
export default BasicForm;