import React from 'react';
import profile from '../../Images/profile.jpeg';
import './Recommend.scss';

import { storiesData } from './dummydata';

class Recommend extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stories: storiesData
		};
	}
	render() {
		return (
			<aside className="Recommend">
				<div className="recommend-wrapper">
					<div className="user-info">
						<img src={profile} alt="profile" />
						<div className="username-wrapper">
							<p className="nickname">aprilgreenery</p>
							<p className="username">정수영(Sooyoung Jeong)</p>
						</div>
					</div>
					<div className="recommend-users">
						<div className="recommend-text">
							<h5>회원님을 위한 추천</h5>
							<span>모두 보기</span>
						</div>
						<ul className="user-list">
							{this.state.stories.map(story => (
								<li>
									<img src={story.src} alt={story.name} />
									<div className="username-wrapper">
										<p className="nickname">{story.name}</p>
										<p className="username">
											{story.name.toUpperCase()}({story.name})
										</p>
									</div>
									<p className="follow">팔로우</p>
								</li>
							))}
						</ul>
					</div>
					<footer className="footer">
						<p>&copy; {new Date().getFullYear()} WESTAGRAM FROM CODEAMEBA</p>
					</footer>
				</div>
			</aside>
		);
	}
}

export default Recommend;
