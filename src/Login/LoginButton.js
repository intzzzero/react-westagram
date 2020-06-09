import React from 'react';
import '../index.css';
import './Login.css';

class LoginButton extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      disabledBtn: {
        disabled: false,
        opacity: 0.3,
        cursor: none
      }
    }
	}
	render() {
		return (
			<div>
				<button type="submit" className="loginBtn" style={}>
					로그인
				</button>
			</div>
		);
	}
}

export default LoginButton;
