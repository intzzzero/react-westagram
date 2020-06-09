import React from 'react';
import '../index.css';
import './Login.css';
import logo from '../images/logo.png';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputEmailValue: '',
			inputPasswordValue: ''
		};
		this.emailInputChange = this.emailInputChange.bind(this);
		this.passwordInputChange = this.passwordInputChange.bind(this);
	}

	render() {
		const disabledBtn = {
			disabled: true,
			opacity: 0.3,
			cursor: 'none'
		};
		const abledBtn = {
			disabled: false,
			opacity: 1,
			cursor: 'pointer'
		};

		return (
			<div className="container">
				<section className="loginContainer">
					<div className="logoWrapper">
						<img src={logo} alt="logo" />
					</div>
					<form className="inputContainer">
						<div className="inputWrapper">
							<input
								type="text"
								className="inputEmail"
								minLength="4"
								placeholder="전화번호, 사용자 이름 또는 이메일"
								value={this.state.inputEmailValue}
								onChange={this.emailInputChange}
							/>
							<input
								type="password"
								className="inputPassword"
								minlength="8"
								placeholder="비밀번호"
								value={this.state.inputPasswordValue}
								onChange={this.passwordInputChange}
							/>
						</div>
						<button
							type="submit"
							className="loginBtn"
							style={
								this.state.inputEmailValue.length > 0 && this.state.inputPasswordValue.length > 0 ? (
									abledBtn
								) : (
									disabledBtn
								)
							}
						>
							로그인
						</button>
					</form>
					<p className="findPassword">비밀번호를 잊으셨나요?</p>
				</section>
				<footer className="footer">
					<div className="copyright">
						<p>&copy; {new Date().getFullYear()} WESTAGRAM FROM CODEAMEBA</p>
					</div>
				</footer>
			</div>
		);
	}

	emailInputChange = e => {
		this.setState({
			inputEmailValue: e.target.value
		});
	};
	passwordInputChange = e => {
		this.setState({
			inputPasswordValue: e.target.value
		});
	};
}

export default Login;
