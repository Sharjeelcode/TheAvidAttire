import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Checkbox } from "@material-tailwind/react";

function BuyNow() {
  const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .email("Invalid email address")
      .required("Email is required "),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string()
      .matches(/^[0-9]+$/, "Postal code must be numeric")
      .required("Postal code is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .required("Phone number is required"),
  });

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  };

  const onSubmit = (e) => {
    console.log(e);
    console.log("hello");
  };

  return (
    <div className="flex px-4 my-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-[52%] flex flex-col gap-3">
            <h1>Contact</h1>
            <div>
              <Field name="emailOrPhone" as={Input} label="Email" />
              <ErrorMessage
                name="emailOrPhone"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <h1>Delivery</h1>
            <div className="flex gap-2">
              <div className="w-full">
                <Field name="firstName" as={Input} label="First name" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div className="w-full">
                <Field name="lastName" as={Input} label="Last name" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
            </div>
            <div>
              <Field name="address" as={Input} label="Address" />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <Field name="city" as={Input} label="City" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div className="w-full">
                <Field name="postalCode" as={Input} label="Postal code" />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
            </div>
            <div>
              <Field name="phone" as={Input} label="Phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div className="flex items-center">
              <Field
                name="saveInfo"
                type="checkbox"
                as={Checkbox}
                // defaultChecked
              />
              <span className="ml-2">Save this information for next time</span>
            </div>
            <h1>Shipping method</h1>
            <div className="border-2 flex justify-between bg-[#F2F7FF] px-4 py-3 rounded-xl">
              <h1>Standard</h1>
              <h1>Free</h1>
            </div>
            <h1>Payment method</h1>
            <h1 className="border-2 flex justify-between px-4 py-3 bg-[#F2F7FF] rounded-xl border-blue-gray-300">
              Cash on Delivery (COD)
            </h1>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white py-4 rounded-lg"
            >
              Complete Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BuyNow;
