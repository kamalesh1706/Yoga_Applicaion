import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function UserAuth() {
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  const nav= useNavigate();

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",

  });
  const username = 'max';
const password = '1811321';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};

  const [state, setState] = useState("login");

  const handleLogin = async (e) => {
    e.preventDefault();
    const val = await axios.post("http://localhost:8181/auth/login",customerLogin,{headers});
    console.log(val.data);
    if(val.data == "Login Successful !"){
      nav("/")
    }else if (val.data == "Invalid Email !"){

      window.alert(val.data);
    }
    // console.log(customerLogin);
  else{
    window.alert(val.data)
  }
}

  // window.alert("Sign up Suucessfull")   
  function handleRegister(e) {
    e.preventDefault();
    axios.post("http://localhost:8181/add",customer,{headers});
    window.alert("Sign up Suucessfull")   
    // if (customer.password !== customer.confirmPassword) {
    //   alert("Passwords won't match");
    // } else {
    //   console.log(customer);
    // }
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex-center-full-hw">
        <form
          onSubmit={(e) => {
            if (state === "login") {
              handleLogin(e);
            } else {
              handleRegister(e);
            }
          }}
        >
          <h1>User</h1>
          
          <div>
            <div className="button-header">
              
              <Button
                onClick={() => {
                  setState("login");
                }}
                className="color-orange"
              >
                Login
              </Button>
              |
              <Button
                onClick={() => {
                  setState("register");
                }}
                className="color-orange"
              >
                Register
              </Button>
            </div>

            {state === "login" ? (
              <>
                <div className="field-container">
                  <TextField
                    required
                    value={customerLogin.email}
                    onChange={(e) => {
                      setCustomerLogin({
                        ...customerLogin,
                        email: e.target.value,
                      });
                    }}
                    type="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="field-container">
                  <TextField
                    required
                    value={customerLogin.password}
                    onChange={(e) => {
                      setCustomerLogin({
                        ...customerLogin,
                        password: e.target.value,
                      });
                    }}
                    type="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="field-container">
                  <Link to={"/forgot-password"}>Forgot Password?</Link>
                </div>
                <div className="field-container">
                  
                  <Button
                    type="submit"
                    variant="contained"
                    className="bg-orange"
                    fullWidth
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  
                </div>
              </>
            ) : (
              <>
                <div className="field-container">
                  <TextField
                    value={customer.firstName}
                    onChange={(e) => {
                      setCustomer({ ...customer, firstName: e.target.value });
                    }}
                    type="text"
                    id="first-name"
                    label="First Name"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="field-container">
                  <TextField
                    value={customer.lastName}
                    onChange={(e) => {
                      setCustomer({ ...customer, lastName: e.target.value });
                    }}
                    type="text"
                    id="last-name"
                    label="Last Name"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="field-container">
                  <TextField
                    value={customer.email}
                    onChange={(e) => {
                      setCustomer({ ...customer, email: e.target.value });
                    }}
                    type="email"
                    id="email"
                    label="Email"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div className="field-container">
                  <TextField
                    value={customer.password}
                    onChange={(e) => {
                      setCustomer({ ...customer, password: e.target.value });
                    }}
                    type="password"
                    id="password"
                    label="Password"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </div>
                
              
                <div className="field-container">
                  {/* <Link to='/login'> */}
                  <Button
                    variant="contained"
                    type="submit"
                    className="bg-orange"
                    fullWidth
                  >
                    Register
                  </Button>
                  {/* </Link> */}
                </div>
                
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default UserAuth;
