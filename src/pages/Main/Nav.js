import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle, faHome, faCompass, faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Nav.scss';
import logo from '../../images/logo.png';
import profile from '../../images/profile.jpeg';

class Nav extends React.Component {
	render() {
		return (
			<div className="Nav">
				<div className="container">
					<div className="logo-container">
						<a href="/">
							<div className="logo-wrapper">
								<img src={logo} alt="instagram logo" />
							</div>
						</a>
					</div>
				</div>
				<div className="search-container">
					<span className="search-placeholder">검색</span>
					<FontAwesomeIcon className="search-icon" icon={faSearch} />
					<input type="text" className="search-input" />
					<FontAwesomeIcon className="cancel-btn" icon={faTimesCircle} />
					<div className="search-Keyword-container">
						<ul className="search-keyword" />
					</div>
				</div>
				<div className="icons-container">
					<div>
						<FontAwesomeIcon className="home-icon" icon={faHome} />
					</div>
					<div>
						<FontAwesomeIcon className="compass-icon" icon={faCompass} />
					</div>
					<div>
						<FontAwesomeIcon className="likes-icon" icon={faHeart} />
					</div>
					<div className="user-profile">
						<img src={profile} alt="profile" />
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
