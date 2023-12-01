import React, { useState } from "react";
import "./css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passIsInvalid =
    didEdit.password && enteredValue.password.trim().length < 6;
  const navigate = useNavigate();
  const handleChangeInput = (identifier, value) => {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailIsInvalid || passIsInvalid) {
      alert("Please enter valid input fields");
    }
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, enteredValue.email, enteredValue.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="Lcontainer">
        <h1>Login</h1>
        <div className="Linput-field">
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={(event) => handleChangeInput("email", event.target.value)}
            value={enteredValue.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="error-email">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(event) =>
              handleChangeInput("password", event.target.value)
            }
            value={enteredValue.password}
            onBlur={() => handleInputBlur("password")}
          />
          <div className="error-pass">
            {passIsInvalid && (
              <p>Password must contains atleast 6 characters.</p>
            )}
          </div>
        </div>
        <button disabled={submitButtonDisabled}>Login</button>
        <p className="userAlready">{errorMsg}</p>
        <p className="havenot-account">
          New to flipZONE ?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>Create your flipZONE account</span>
          </Link>
        </p>
      </div>
    </form>
  );
};
export default Login;
