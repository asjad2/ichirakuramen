import React from "react";
import "./Form.css";
import { updateApplicant, getApplicant } from "../../Service/api";
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Form1() {
  const { id } = useParams();

  const [user, setUser] = useState({
    FullName: "",
    Username: "",
    Password: "",
    ConfirmPassword: "",
    Email: "",
    PhoneNumber: "",
  });
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getApplicant(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
}

  const editEmployeeDetails = async () => {
    await updateApplicant(id, user);
}

  return (
    <div className="col-12 formi" method="POST">
      <div className=" col-6 py-5 h-100 formh ">
        <div className="row justify-content-center align-items-center h-100">
          <div
            className="card shadow-2-strong card-registration"
            style={{
              borderRadius: "15px",
              backgroundColor: "orange",
              width: "100%",
              height: "100%",
            }}
          >
            <form method="POST">
              <div className="row" style={{ fontFamily: "roboto" }}>
                <h1 className="heading">Become a Member</h1>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="FullName"
                      value={user.FullName}
                      onChange={(e) => onValueChange(e)}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="full name"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="username">
                      Username
                    </label>
                    <input
                      type="text"
                      name="Username"
                      value={user.Username}
                      onChange={(e) => onValueChange(e)}
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="password">
                      Password
                    </label>
                    <input
                      name="Password"
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="password123"
                      value={user.Password}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="confirmpassword">
                      Confirm Password
                    </label>
                    <input
                      name="ConfirmPassword"
                      type="password"
                      id="confirmpassword"
                      className="form-control form-control-lg"
                      placeholder="password"
                      value={user.ConfirmPassword}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ fontFamily: "sans-serif" }}>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" for="EmailAddress">
                      Email
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="Email"
                      value={user.Email}
                      onChange={(e) => onValueChange(e)}
                      className="form-control form-control-lg"
                      aria-describedby="emailHelp"
                      placeholder="enter your email address"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" for="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      name="PhoneNumber"
                      type="tel"
                      id="phoneNumber"
                      className="form-control form-control-lg"
                      value={user.PhoneNumber}
                      onChange={(e) => onValueChange(e)}
                      placeholder="enter your mobile number"
                    />
                  </div>
                </div>
              </div>

              <div>
               <Link to="/list">
                <input
                  onClick={() => editEmployeeDetails()}
                  type="submit"
                  value="Update"
                  className="btn my-3 btn-lg"
                  style={{ backgroundColor: "pink" }}
                />
               </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1;
