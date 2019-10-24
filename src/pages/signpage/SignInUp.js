import React from "react";
import "./Sign.scss";
import SignIn from "../../components/Signin/Signin";
import SignUp from "../../components/SignUp/SignUp";
const SignInUp = () => (
	<div className="sign-in-and-sing-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInUp;
