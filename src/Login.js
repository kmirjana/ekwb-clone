import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      if (auth) {
        history.push("/");
      }
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const register = async (e) => {
    e.preventDafault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      if (auth) {
        history("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="login">
      <Link to="/">
        <img src="../logo.jpg" alt="EKWB logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Log in</h1>
        <>
          <p>{user?.email}</p>
          <p>If you have an account with us, please log in</p>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={signInEmail}
              onChange={(e) => {
                setSignInEmail(e.target.value);
              }}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={signInPassword}
              onChange={(e) => {
                setSignInPassword(e.target.value);
              }}
            />
            <br />
            <button type="submit" className="login__btn" onClick={signIn}>
              Log in
            </button>
          </form>
          <br />
          <form>
            <h5>Register E-mail</h5>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <br />
            <h5>Register password</h5>
            <input
              type="password"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
            <h5>Address</h5>
            <input
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <br />
          </form>{" "}
          <button className="createAcc__btn" type="submit" onClick={register}>
            Create an account
          </button>
          <br />
          <button type="submit" onClick={logout}>
            Logout
          </button>
        </>{" "}
      </div>
    </div>
  );
}

export default Login;
