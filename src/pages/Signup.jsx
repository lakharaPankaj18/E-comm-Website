import React, { useRef, useState } from "react";
import "./css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const cnfPassword = useRef();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredCnfPassword = cnfPassword.current.value;
    const nameIsvalid = enteredName.trim().length > 0;
    const emailIsvalid = enteredEmail.includes("@");
    const passwordIsvalid = enteredPassword.trim().length > 5;
    if (!nameIsvalid) {
      setNameIsInvalid(true);
      return;
    }
    setNameIsInvalid(false);

    if (!emailIsvalid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    if (!passwordIsvalid) {
      setPasswordIsInvalid(true);
      return;
    }
    setPasswordIsInvalid(false);
    if (enteredPassword !== enteredCnfPassword) {
      alert("Password do not match");
      return;
    }
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: enteredName,
        });
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign up</h1>
        <div className="input-field">
          <input type="text" placeholder="Enter your name" ref={name} />
          <div className="form-error">
            {nameIsInvalid && <p>Please enter your name.</p>}
          </div>
          <input type="email" placeholder="Email Address" ref={email} />
          <div className="form-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
          <input type="password" placeholder="Password" ref={password} />
          <div className="form-error">
            {passwordIsInvalid && (
              <p>Password must contains atleast 6 characters.</p>
            )}
          </div>
          <input
            type="cnf-password"
            placeholder="Password Confirmation"
            ref={cnfPassword}
          />
        </div>
        <button disabled={submitButtonDisabled}>Sign up</button>
        <p className="user-already">{errorMsg}</p>
        <p className="have-account">
          Already have an account ?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Login</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
