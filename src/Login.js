import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import LogoName from "./GetSocialLogoName.svg";
import Logo from "./GetSocialLogo.png";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // Sign in...
    auth.signInWithPopup(provider).then((result) => {
      dispatch({ type: actionTypes.SET_USER, user: result.user });
    });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="Logo" />
        <img src={LogoName} alt="Logo" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
