import React from 'react'
import * as Yup from "yup"
import useFormik from "formik"
import axios from 'axios'

const Add = () => {

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    image: Yup.string().required("Required")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: 0,
      image: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8000/", values)
        Swal.fire({
          title: "Product added Successfully!",
          icon: "success"
        });
      } catch (error) {
        console.log(error);
      }
    }
  })
  return (
    <form action="">
      <input type="text" placeholder='Name' name='name' {...formik.getFieldProps("name")} />
      <input type="text" placeholder='Category' name='category' {...formik.getFieldProps("category")} />
      <input type="text" placeholder='Price' name='price' {...formik.getFieldProps("price")} />
      <input type="text" placeholder='image' name='image' {...formik.getFieldProps("image")} />
    </form>
  )
}

export default Add