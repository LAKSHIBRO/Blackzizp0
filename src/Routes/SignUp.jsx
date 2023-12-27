import React, { useState, useRef } from "react";
import bg from "../Assets/images/loginbg.png";
import {
  Person,
  Lock,
  RemoveRedEye,
  Search,
  VisibilityOff,
  Visibility,
  Phone,
  AlternateEmail,
  ContactMail,
} from "@mui/icons-material";
import { Routes, Route, useNavigate } from "react-router-dom";
import AnimateImage from "../components/animateImage";
import CustomAlert from "../components/customAlert";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const [firstNameStyle, setFirstNameStyle] = useState({});
  const [lastNameStyle, setLastNameStyle] = useState({});
  const [emailStyle, setEmailStyle] = useState({});
  const [sponsorStyle, setSponsorStyle] = useState({});
  const [nicStyle, setNICStyle] = useState({});
  const [contactNumberStyle, setContactNumberStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});
  const [confirmPasswordStyle, setConfirmPasswordStyle] = useState({});

  const handleBlur = (field) => {
    // Update styles when a field loses focus
    if (field === "firstName") {
      setFirstNameStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "lastName") {
      setLastNameStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "email") {
      setEmailStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "contactNumber") {
      setContactNumberStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "sponsor") {
      setSponsorStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "nic") {
      setNICStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "password") {
      setPasswordStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (field === "confirmPassword") {
      setConfirmPasswordStyle({
        backgroundColor: "white",
        color: "black",
      });
    }
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Must be only Letters")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Must be only Letters")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contactNumber: Yup.string()
      .min(10, "Invalid Number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Must be only Digits"
      )
      .required("Required"),
    nic: Yup.string().required("Required"),
    sponsor: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
        "Must contain at least 8 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .min(8, "Must be at least 8 characters long")
      .oneOf([Yup.ref("password")], "Your passwords do not match.")
      .required("Required"),
  });

  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    nic: "",
    referalID: "",
    password: "",
    confirmPassword: "",
  });

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < Math.min(2, files.length); i++) {
      newSelectedFiles.push(files[i]);
    }

    setSelectedFiles(newSelectedFiles);
  };

  const openFileBrowser = () => {
    fileInputRef.current.click();
  };

  const handleNextClick = () => {
    setShowStep1(false);
    setShowStep2(true);
  };
  const handleSubmit = () => {
   console.log('object');
  };

  return (
    <div className="w-full h-screen overflow-hidden fixed bg-gradient-to-br from-[#2d2d2d] via-[#151517] to-[#131314]">
      <div className="flex w-full h-full relative">
        <div
          className="form-container lg:w-[60%] lg:h-auto sm:w-[80%] w-full md:w-[80%] mx-auto flex lg:flex-row flex-col rounded-[6px] z-10 relative h-screen overflow-y-scroll"
          id="style-7"
        >
          <div className="lg:w-3/5 h-full flex flex-col p-8 rounded-br-[6px] rounded-tr-[6px] w-full mx-auto fixed mt-10">
            <h2 className="text-white text-[1.2rem] font-semibold">
              Create Your Account
            </h2>
            <h3 className="text-white text-[12px]">
              Sign to experience the trending crypto platform{" "}
            </h3>

            <div className="flex flex-row w-full ">
              <div className="step-1 w-1/2 justify-center items-center p-2 flex relative cursor-pointer">
                <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex justify-center items-center rounded-full bg-[#ffae3c]">
                  <span className="text-[8px] md:text-[12px] font-semibold z-10">
                    1
                  </span>
                </div>
                <div className="border-collapse absolute top-0 border-b-[1px] border-[#ffae3c] w-full h-1/2"></div>
              </div>

              <div className="step-2 w-1/2 justify-center items-center p-2 flex relative cursor-pointer">
                <div
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex justify-center items-center rounded-full "
                  style={{ backgroundColor: showStep2 ? "#ffae3c" : "#434343" }}
                >
                  <span className="text-[8px] md:text-[12px] font-semibold z-10">
                    2
                  </span>
                </div>
                <div
                  className="border-collapse absolute top-0 border-b-[1px] w-full h-1/2"
                  style={{ borderColor: showStep2 ? "#ffae3c" : "#434343" }}
                ></div>
              </div>
            </div>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                sponsor: "",
                nic: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log('gdfgd',values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col mb-[56px]">
                  {showStep1 && (
                    <div className="step-1">
                      <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
                        <div className="form-field-label sm:flex justify-between w-full hidden ">
                          <span className="text-white text-[12px] uppercase ">
                            First Name
                          </span>

                          {errors.firstName && touched.firstName ? (
                            <span className="text-red-600 text-[12px] ">
                              {errors.firstName}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                          <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                            <span className="text-[16px] text-[#151515]">
                              <Person />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            style={firstNameStyle}
                            className="w-full h-full p-2 bg-transparent outline-none text-white text-[12px] form-control form-field-input"
                            required
                          />
                        </div>
                        {errors.firstName && touched.firstName ? (
                          <span className="text-red-600 text-[12px] block sm:hidden">
                            {errors.firstName}
                          </span>
                        ) : null}
                      </div>

                      <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
                        <div className="form-field-label sm:flex justify-between w-full hidden">
                          <span className="text-white text-[12px] uppercase hidden sm:block">
                            Last Name
                          </span>
                          {errors.lastName && touched.lastName ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.lastName}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                          <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                            <span className="text-[16px] text-[#151515]">
                              <Person />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="lastName"
                            id="lastName"
                            style={lastNameStyle}
                            placeholder="Last Name"
                            className="w-full h-full p-2 bg-transparent outline-none text-white text-[12px] form-field-input"
                            required
                          />
                        </div>
                        {errors.lastName && touched.lastName ? (
                          <span className="text-red-600 text-[12px] block sm:hidden">
                            {errors.lastName}
                          </span>
                        ) : null}
                      </div>

                      <div className="flex flex-col md:flex-row md:space-x-5">
                        <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-1/2 space-y-2">
                          <div className="form-field-label sm:flex justify-between w-full hidden ">
                            <span className="text-white text-[12px] uppercase ">
                              NIC
                            </span>

                            {errors.nic && touched.nic ? (
                              <span className="text-red-600 text-[12px] ">
                                {errors.nic}
                              </span>
                            ) : null}
                          </div>
                          <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                            <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                              <span className="text-[16px] text-[#151515]">
                                <Person />
                              </span>
                            </div>
                            <Field
                              type="text"
                              name="nic"
                              id="nic"
                              placeholder="NIC"
                              style={nicStyle}
                              className="w-full h-full p-2 bg-transparent outline-none text-white text-[12px] form-control form-field-input"
                              required
                            />
                          </div>
                          {errors.nic && touched.nic ? (
                            <span className="text-red-600 text-[12px] block sm:hidden">
                              {errors.nic}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-1/2 space-y-2">
                          <div className="form-field-label sm:flex justify-between w-full hidden ">
                            <span className="text-white text-[12px] uppercase ">
                              Upload NIC Digital Copy (Both Sides)
                            </span>
                          </div>

                          <div
                            onClick={openFileBrowser}
                            className="form-field-input-container cursor-pointer w-full rounded-[6px] h-[38px] bg-[#FFA524] border-[1px] border-[#FFA524] flex flex-row justify-center items-center"
                          >
                            <button
                              onClick={openFileBrowser}
                              className="custom-file-button text-[12px]"
                            >
                              Choose Image(s)
                            </button>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileInputChange}
                              style={{ display: "none" }}
                              accept="image/jpeg, image/png, image/gif"
                              multiple
                            />
                          </div>
                          <div>
                            {selectedFiles.length > 0 && (
                              <div>
                                {selectedFiles.map((file, index) => (
                                  <span
                                    className="text-[12px] text-white"
                                    key={index}
                                  >
                                    {" "}
                                    | {file.name}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
                        <div className="form-field-label sm:flex justify-between w-full hidden">
                          <span className="text-white text-[12px] uppercase hidden sm:block">
                            Email
                          </span>
                          {errors.email && touched.email ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.email}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                          <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                            <span className="text-[16px] text-[#151515]">
                              <AlternateEmail />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="email"
                            id="email"
                            style={emailStyle}
                            placeholder="Email"
                            className=" w-full h-full p-2 bg-transparent outline-none text-white text-[12px] form-field-input"
                            required
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <span className="text-red-600 text-[12px] block sm:hidden">
                            {errors.email}
                          </span>
                        ) : null}
                      </div>

                      <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
                        <div className="form-field-label sm:flex justify-between w-full hidden">
                          <span className="text-white text-[12px] uppercase hidden sm:block">
                            Contact number
                          </span>
                          {errors.contactNumber && touched.contactNumber ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.contactNumber}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                          <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                            <span className="text-[16px] text-[#151515]">
                              <Phone />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="contactNumber"
                            id="contactNumber"
                            style={contactNumberStyle}
                            placeholder="Contact"
                            className="form-field-input w-full h-full p-2 bg-transparent outline-none text-white text-[12px]"
                            required
                          />
                        </div>
                        {errors.contactNumber && touched.contactNumber ? (
                          <span className="text-red-600 text-[12px] block sm:hidden">
                            {errors.contactNumber}
                          </span>
                        ) : null}
                      </div>

                      <div className=" flex justify-end sm:mt-5 mt-2 w-full space-y-2">
                        <button
                          onClick={handleNextClick}
                          className="px-4 py-2 rounded-md bg-gradient-to-r from-[#FFA524] to-[#FFDC4A] uppercase text-[#151515] cursor-pointer font-semibold text-[12px]"
                        >
                          Next
                        </button>

                        {showAlert && (
                          <CustomAlert
                            message="Fill all the Details"
                            onClose={handleCloseAlert}
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {showStep2 && (
                    <div className="step-2">
                      <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2">
                        <div className="form-field-label  sm:flex justify-between w-full hidden">
                          <span className="text-white text-[12px] uppercase hidden sm:block">
                            Sponsor ID
                          </span>
                          {errors.sponsor && touched.sponsor ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.sponsor}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                          <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                            <span className="text-[16px] text-[#151515]">
                              <ContactMail />
                            </span>
                          </div>
                          <Field
                            type="text"
                            name="sponsor"
                            id="sponsor"
                            style={sponsorStyle}
                          
                            placeholder="Referal ID"
                            className="form-field-input w-full h-full p-2 bg-transparent outline-none text-white text-[12px]"
                            required
                           
                          />
                        </div>
                        {errors.sponsor && touched.sponsor ? (
                          <span className="text-red-600 text-[12px] block sm:hidden">
                            {errors.sponsor}
                          </span>
                        ) : null}
                      </div>

                      <div className="flex flex-col md:flex-row md:space-x-5">
                        <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2 md:w-1/2">
                          <div className="form-field-label flex justify-between w-full">
                            <span className="text-white text-[12px] uppercase">
                              Password
                            </span>
                          </div>
                          <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                            <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                              <span className="text-[16px] text-[#151515]">
                                <Lock />
                              </span>
                            </div>
                            <Field
                              className="form-field-input w-[90%] h-full p-2 bg-transparent outline-none text-white text-[12px]"
                              type={passwordVisible ? "text" : "password"}
                              name="password"
                              id="password"
                              style={passwordStyle}
                              onBlur={() => handleBlur("password")}
                              required
                             
                            />

                            <div className=" h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                              {passwordVisible ? (
                                <span
                                  className="text-[16px] text-[#FFA524] cursor-pointer"
                                  onClick={togglePasswordVisibility}
                                >
                                  <Visibility />
                                </span>
                              ) : (
                                <span
                                  className="text-[16px] text-[#FFA524] cursor-pointer"
                                  onClick={togglePasswordVisibility}
                                >
                                  <VisibilityOff />
                                </span>
                              )}
                            </div>
                          </div>
                          {errors.password && touched.password ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.password}
                            </span>
                          ) : null}
                        </div>

                        <div className="form-field-container flex flex-col sm:mt-5 mt-2 w-full space-y-2 md:w-1/2">
                          <span className="form-field-label text-white text-[12px] uppercase">
                            Confirm Password
                          </span>
                          <div className="form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center">
                            <div className="form-field-input-icobox bg-[#FFA524] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                              <span className="text-[16px] text-[#151515]">
                                <Lock />
                              </span>
                            </div>
                            <Field
                              className="form-field-input w-[90%] h-full p-2 bg-transparent outline-none text-white text-[12px]"
                              type={
                                confirmPasswordVisible ? "text" : "password"
                              }
                              name="confirmPassword"
                              id="confirmPassword"
                              style={confirmPasswordStyle}
                             
                              required
                             
                            />
                            <div className=" h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
                              {confirmPasswordVisible ? (
                                <span
                                  className="text-[16px] text-[#FFA524] cursor-pointer"
                                  onClick={toggleConfirmPasswordVisibility}
                                >
                                  <Visibility />
                                </span>
                              ) : (
                                <span
                                  className="text-[16px] text-[#FFA524] cursor-pointer"
                                  onClick={toggleConfirmPasswordVisibility}
                                >
                                  <VisibilityOff />
                                </span>
                              )}
                            </div>
                          </div>
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <span className="text-red-600 text-[12px]">
                              {errors.confirmPassword}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <button
                      onClick={handleSubmit}
                        className="form-button w-full rounded-[6px] uppercase text-[#151515] font-semibold h-[44px] bg-gradient-to-r from-[#FFA524] to-[#FFDC4A] flex flex-row justify-center items-center mt-5"
                      >
                        Register
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col mt-5 ">
                    <span className="text-[14px]  text-white">
                      Already have an account?{" "}
                      <span
                        className="text-[14px]  text-[#FFA524] cursor-pointer"
                        onClick={navigateToLogin}
                      >
                        Login Here{" "}
                      </span>
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between items-center h-full absolute -z-10 opacity-50">
          <AnimateImage />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
