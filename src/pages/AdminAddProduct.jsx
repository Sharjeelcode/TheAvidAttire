import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Checkbox, Spinner } from "@material-tailwind/react";

function AddProduct() {
  const [upload, setupload] = useState(false);
  const [message, setMessage] = useState();
  const [files, setFile] = useState([]);
  const handleFile = async (e) => {
    setMessage("");
    let uploadedFile = e.target.files;
    setupload(true);
    for (let i = 0; i < uploadedFile.length; i++) {
      const fileType = uploadedFile[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, uploadedFile[i]]);
        // try {
        //   const imageRef = ref(
        //     storage,
        //     `${auth.currentUser.email}/${uploadedFile[0].name}`
        //   );
        //   await uploadBytes(imageRef, uploadedFile[i]);
        //   const url = await getDownloadURL(imageRef);
        //   yourimage(url);
        //   setupload(false);
        //   console.log("UPLOADED");
        //   yourfields(false);
        // } catch (error) {
        //   console.log(error.message);
        //   setupload(false);
        // }
      } else {
        setMessage("only images accepted");
        setupload(false);
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };
  const validationSchema = Yup.object({
    ProductName: Yup.string().required("Product name is required"),
    Prize: Yup.number().required("Prize is required"),
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
    ProductName: "",
    Prize: "",
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
    <div className="flex px-4 lg:px-32 my-8 gap-2 lg:flex-1 justify-center">
      <div className="w-full lg:w-[60vw]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg text-center">
                Add New Product
              </h1>
              <div>
                <Field name="ProductName" as={Input} label="Product Name" />
                <ErrorMessage
                  name="ProductName"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <div className="flex flex-col  lg:flex-row gap-2">
                <div className="w-full">
                  <Field name="Prize" as={Input} label="Prize" />
                  <ErrorMessage
                    name="Prize"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div className="relative h-10 w-72 min-w-[200px]">
                  <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="Shirts">SHIRTS</option>
                    <option value="oversizedtees">OVERSIZED T-SHIRTS</option>
                    <option value="plaintshirts">PLAIN T-SHIRTS</option>
                    <option value="ragularfittshirt">
                      RAGULAR FIT T-SHIRTS
                    </option>
                    <option value="bottomwear">BOTTOM WEAR</option>
                  </select>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Select a Catagory
                  </label>
                </div>
              </div>
              <>
                <div className="flex justify-center items-center px-3 pb-4">
                  <div className="rounded-lg  shadow-md bg-gray-50 w-full">
                    <div className="m-4">
                      <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                        {message}
                      </span>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className=" h-12 text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Select a photo
                            </p>
                          </div>
                          <input
                            type="file"
                            onChange={handleFile}
                            className="opacity-0"
                            multiple="multiple"
                            name="files[]"
                          />
                        </label>
                      </div>
                      <div className="flex flex-wrap justify-items-center gap-2 mt-2">
                        {files.map((file, key) => {
                          return (
                            <div key={key} className="overflow-hidden relative">
                              <i
                                onClick={() => {
                                  removeImage(file.name);
                                }}
                                className="mdi mdi-close absolute right-1 backdrop-blur-sm px-1  rounded-full hover:text-white cursor-pointer"
                              >
                                X
                              </i>
                              <img
                                className="h-20 w-20 rounded-md"
                                src={URL.createObjectURL(file)}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {upload && (
                      <div className="flex justify-center mb-2">
                        <span className="px-4">Uploading</span>
                        <Spinner />
                      </div>
                    )}
                  </div>
                </div>
              </>
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
    </div>
  );
}

export default AddProduct;
