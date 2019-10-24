import React from "react";
import "./SignUp.scss";
import FormInput from "../FormInput/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import Button from "../Button/Button";

class SignUp extends React.Component {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
		error: null
	};
	handleSubmit = async e => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Password dont match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			this.setState({
				error: error.message
			});
			setTimeout(() => {
				this.setState({
					error: null
				});
			}, 4000);
		}
	};
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		const { displayName, email, password, confirmPassword, error } = this.state;
		return (
			<div className="sign-up flex-1">
				<h2 className="title">I do not have account</h2>
				<span>Sign up with your email and password</span>
				{error && <p style={{ color: 'red' }}> {error} </p>}
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						label="Display Name"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						label="Email"
						name="email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						label="Password"
						name="password"
						value={password}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						label="Confirm Password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						required
					/>
					<Button type="submit">SIGN UP</Button>
				</form>
			</div>
		);
	}
}

export default SignUp;
