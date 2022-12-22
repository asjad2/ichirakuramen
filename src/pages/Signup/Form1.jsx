import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import NErrorMessage from "./errorMessage";
import NavigationBar from "./header";
import FooterNew from "./footerNew";
import Footer from "./footer";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const validationSchema = yup.object({
  name: yup.string().required("Name is Required!"),

  password: yup
    .string()
    .matches(
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),

  birthday: yup.string().required("Please enter your Date Of Birth!"),

  phone: yup.number().required("Phone is Required!"),

  gender: yup.string().required("Gender is Required!"),

  email: yup.string().required("Email is Required!"),
});




const Signup = () => {

  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    birthday: "",
    email: "",
    phone: "",
  });
  

  const handleChange = (e) => {
    
  setInputs(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));

  };

  const sendRequest = async () => {
    const res = axios.post('http://localhost:5000/api/signup', {
      name: inputs.name,
      password: inputs.password,
      birthday: inputs.birthday,
      email: inputs.email,
      phone: inputs.phone,
    }, )
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    //request send
    sendRequest().then(()=>history("/login"))
  };




  return (
  
    <div>
      
      <NavigationBar />
      
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{
                  borderRadius: "15px",
                  marginTop: "-40px",
                  backgroundColor: "black",
                }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3
                    className="mb-4 pb-2 pb-md-0 mb-md-4"
                    style={{
                      color: "white",
                      marginTop: "-20px",
                      fontFamily: "sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Sign up
                  </h3>

                  <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                      name: "",
                      password: "",
                      birthday: "",
                      email: "",
                      phone: "",
                    }}
                  >
                    
                    {({ values }) => (
                      <Form onSubmit={handleSubmit} >
                        <div
                          className="row"
                          style={{ color: "white", fontFamily: "sans-serif" }}
                        >
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <Field
                                placeholder="Name"
                                name="name"
                                type="text"
                                id="firstName"
                                className="form-control form-control-lg"
                                value={inputs.name}
                                onChange={handleChange}
                              />
                
                              <NErrorMessage name="name" />
                            </div>
                          </div>

                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <Field
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="lastName"
                                className="form-control form-control-lg"
                                value={inputs.password}
                                onChange={handleChange}
                              />
           
                              <NErrorMessage name="password" />
                            </div>
                          </div>
                        </div>

                        <div
                          className="row"
                          style={{ color: "white", fontFamily: "sans-serif" }}
                        >
                          <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div className="form-outline datepicker w-100">
                              <Field
                                placeholder="Birthday"
                                name="birthday"
                                type="text"
                                className="form-control form-control-lg"
                                value={inputs.birthday}
                                onChange={handleChange}
                                id="birthdayDate"
                              />
      
                              <NErrorMessage name="birthday" />
                            </div>
                          </div>

                          <div className="col-md-6 mb-4">
                            <h6 className="mb-2 pb-1">Gender: </h6>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="femaleGender"
                                value="option1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="femaleGender"
                              >
                                Male
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="maleGender"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                for="maleGender"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>

                        <div
                          className="row"
                          style={{ color: "white", fontFamily: "sans-serif" }}
                        >
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <Field
                                placeholder="Email"
                                name="email"
                                type="email"
                                id="emailAddress"
                                className="form-control form-control-lg"
                                value={inputs.email}
                                onChange={handleChange}
                              />
            
                              <NErrorMessage name="email" />
                            </div>
                          </div>

                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <Field
                                placeholder="Phone"
                                name="phone"
                                type="phone"
                                id="phoneNumber"
                                className="form-control form-control-lg"
                                value={inputs.phone}
                                onChange={handleChange}
                              />
                    
                              <NErrorMessage name="phone" />
                            </div>
                          </div>
                        </div>

                        <div style={{ marginTop: "-20px", fontFamily:"sans-serif" }}>
                          <input
                            className="btn btn-danger btn-lg"
                            type="submit"
                            value="Sign up"
                            
                          />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterNew/>
      <Footer/>
    </div>
    
  );
};

export default Signup;