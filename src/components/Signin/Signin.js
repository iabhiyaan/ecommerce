import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./Signin.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase";
class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};
	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: "",
				password: ""
			});
		} catch (error) {
			console.error(error.message);
		}
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		return (
			<div className="sign-in flex-1">
				<h2 className="title">I already have an account</h2>
				<span> Sign in using email and password </span>
				<form action="#" onSubmit={this.handleSubmit} className="form-row">
					<FormInput
						type="email"
						required
						value={this.state.email}
						name="email"
						label="email"
						handleChange={this.handleChange}
					/>
					<FormInput
						type="password"
						value={this.state.password}
						name="password"
						label="password"
						handleChange={this.handleChange}
					/>
					<div className="d-flex justify-content-between">
						<Button type="submit">Sign In</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							Sign in with Google{" "}
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
