import React from 'react';
import profile from '../../images/profile.jpeg';

class Recommend extends React.Component {
	render() {
		return (
			<aside className="Recommend">
				<div className="Recommend-wrapper">
					<div className="Recommend-my-info">
						<img src={profile} />
						<div className="Recommend-username-wrapper">
							<p className="nickname">aprilgreenery</p>
							<p className="username">정수영(Sooyoung Jeong)</p>
						</div>
					</div>
					<div className="Recommend-users">
						<div className="Recommend-text">
							<h5>회원님을 위한 추천</h5>
							<span>모두 보기</span>
						</div>
						<ul className="Recommend-user-list">
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="Recommend-username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="Recommend-username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="Recommend-username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="Recommend-username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="Recommend-username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
						</ul>
					</div>
				</div>
				<footer className="footer">
					<p>&copy; {new Date().getFullYear()} WESTAGRAM FROM CODEAMEBA</p>
				</footer>
			</aside>
		);
	}
}

export default Recommend;
