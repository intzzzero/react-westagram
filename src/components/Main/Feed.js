import React from 'react';
import Story from './Story';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import '../../index.css';
import './Feed.css';
import profile from '../../images/profile.jpeg';

class Feed extends React.Component {
	render() {
		return (
			<main className="Feed">
				<div className="feedContainer">
					<Story />
					<div className="feedWrapper">
						<FeedHeader />
					</div>
				</div>
			</main>
		);
	}
}

class FeedHeader extends React.Component {
	render() {
		return (
			<header className="FeedHeader">
				<div className="postingUser">
					<img src={profile} alt="profile" />
					<div className="usernameWrapper">
						<p className="nickname">aprilgreenery</p>
						<p className="location">Goyang</p>
					</div>
					<FontAwesomeIcon className="threeDots" icon={faEllipsisH} />
				</div>
			</header>
		);
	}
}

export default Feed;
