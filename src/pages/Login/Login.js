import React from 'react';
import '../../index.css';
import './Login.scss';
import logo from '../../Images/logo.png';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputEmailValue: '',
			inputPasswordValue: ''
		};
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
	goToMain = () => {
		const userId = this.state.inputEmailValue;
		const userPw = this.state.inputPasswordValue;
		if (userId === 'wecode@gmail.com' && userPw === '12341234') {
			this.props.history.push('/main');
		} else {
			alert('제대로 입력하세여~');
		}
	};

	render() {
		const disabledBtn = {
			disabled: true,
			opacity: 0.3
		};
		const abledBtn = {
			disabled: false,
			opacity: 1,
			cursor: 'pointer'
		};

		return (
			<div className="Login">
				<section className="login-container">
					<div className="logo-wrapper">
						<img src={logo} alt="logo" />
					</div>
					<form>
						<div className="input-wrapper">
							<input
								type="text"
								className="input-email"
								minLength="4"
								placeholder="전화번호, 사용자 이름 또는 이메일"
								value={this.state.inputEmailValue}
								onChange={this.emailInputChange}
							/>
							<input
								type="password"
								className="input-password"
								minLength="4"
								placeholder="비밀번호"
								value={this.state.inputPasswordValue}
								onChange={this.passwordInputChange}
							/>
						</div>
						<button
							type="button"
							className="login-btn"
							style={this.state.inputEmailValue && this.state.inputPasswordValue ? abledBtn : disabledBtn}
							onClick={this.goToMain}
						>
							로그인
						</button>
					</form>
					<p
						className="find-password"
						onClick={() => {
							alert('잘 생각해보세요^^');
						}}
					>
						비밀번호를 잊으셨나요?
					</p>
				</section>
				<footer className="footer">
					<div className="copyright">
						<p>&copy; {new Date().getFullYear()} WESTAGRAM FROM CODEAMEBA</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default withRouter(Login);
