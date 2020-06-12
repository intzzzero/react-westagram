import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle, faHome, faCompass, faHeart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/logo.png';
import profile from '../../images/profile.jpeg';

import '../../index.css';
import './Nav.css';

class Nav extends React.Component {
	render() {
		return (
			<div className="Nav">
				<div className="navContainer">
					<div className="logoContainer">
						<a href="/">
							<div className="logoWrapper">
								<img src={logo} />
							</div>
						</a>
					</div>
				</div>
				<div className="searchContainer">
					<span className="searchPlaceholder">검색</span>
					<FontAwesomeIcon className="searchIcon" icon={faSearch} />
					<input type="text" className="searchInput" />
					<FontAwesomeIcon className="cancelBtn" icon={faTimesCircle} />
					<div className="searchKeywordContainer">
						<ul className="searchKeyword" />
					</div>
				</div>
				<div className="navIconsContainer">
					<div>
						<FontAwesomeIcon className="homeIcon" icon={faHome} />
					</div>
					<div>
						<FontAwesomeIcon className="compassIcon" icon={faCompass} />
					</div>
					<div>
						<FontAwesomeIcon className="likesIcon" icon={faHeart} />
					</div>
					<div className="userProfile">
						<img src={profile} />
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
