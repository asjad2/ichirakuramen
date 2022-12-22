import { addLogin } from "../../Service/api";
import {Link} from "react-router-dom"
import { useRef, useState } from "react";

function Loginpage(props) {
  const usernameRef=useRef();
  const passwordRef=useRef();
  const [isAuthentic,setIsAuthentic]=useState(false);

 const submitHandler = async (event) => {
    event.preventDefault();
   
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    var res=await addLogin(enteredUsername,enteredPassword);
   


    if(res.data==200){
      setIsAuthentic(true);
    }else{
      setIsAuthentic(false);
    }
    alert(isAuthentic)
  };
  props.uplifter(isAuthentic);

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
            <form  onSubmit={(e) => submitHandler(e)}>
              <div className="row" style={{ fontFamily: "roboto" }}>
                <h1 className="heading">Welcome Back</h1>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" for="username">
                      Username
                    </label>
                    <input
                      type="text"
                      name="Username"
                    
                      ref={ usernameRef}
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
                     
                      ref={passwordRef}
                    
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn primary btn-block p-x-md">
              Sign in
            </button>
            <Link to="/ichirakuramen/signup">
            <button type="submit" className="btn primary btn-block p-x-md">
              Sign Up
            </button>
            </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
