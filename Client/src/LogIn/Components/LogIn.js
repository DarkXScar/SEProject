import React, { useState } from "react";
import Axios from "axios";
import "../Styles/login-style.css";
import user from "../Images/user.png";
import email from "../Images/email.png";
import unlock from "../Images/unlock.png";

function LogIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [logInStatus, setLoginStatus] = useState("");

	const login = () => {
		Axios.post("http://localhost:3001/login", {
			username: username,
			password: password,
		}).then((response) => {
			if (response.data.message) {
				setLoginStatus(response.data.message);
			} else {
				setLoginStatus(response.data[0].Username);
			}
		});
	};

	return (
		<div className='main'>
			<div className='sub-main'>
				<div>
					<div className='log-in-image'>
						<div className='image-container'>
							<img src={user} alt='user icon' className='user' />
						</div>
					</div>
					<div>
						<h1>Log-in page</h1>
						<div>
							<img src={email} alt='Mail icon' className='email' />
							<input
								type='text'
								placeholder='email'
								className='name'
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							/>
						</div>
						<div className='pass-input'>
							<img src={unlock} alt='Password icon' className='password' />
							<input
								type='password'
								placeholder='password'
								className='name'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className='log-in-btn'>
							<button onClick={login}>Log-in</button>
						</div>
						<div>
							<p className='links'>
								<a href='#'>Forgot password?</a>or<a href='#'>Sign up</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<h1>{logInStatus}</h1>
		</div>
	);
}

export default LogIn;
