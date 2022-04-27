import "../login-style.css";
import user from "../Images/user.png";
import email from "../Images/email.png";
import unlock from "../Images/unlock.png";

function LogIn() {
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
							<input type='text' placeholder='email' className='name' />
						</div>
						<div className='pass-input'>
							<img src={unlock} alt='Password icon' className='password' />
							<input type='password' placeholder='password' className='name' />
						</div>
						<div className='log-in-btn'>
							<button>Log-in</button>
						</div>
						<div>
							<p className='links'>
								<a href='#'>Forgot password?</a>or<a href='#'>Sign up</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LogIn;
