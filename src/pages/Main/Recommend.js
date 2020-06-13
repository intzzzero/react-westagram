import React from 'react';
import profile from '../../images/profile.jpeg';
import '../../styles/Recommend.scss';

class Recommend extends React.Component {
	render() {
		return (
			<aside className="Recommend">
				<div className="recommend-wrapper">
					<div className="user-info">
						<img src={profile} />
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
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
							<li>
								<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1" />
								<div className="username-wrapper">
									<p className="nickname">codeAmeba</p>
									<p className="username">정수영(Sooyoung Jeong)</p>
								</div>
								<p className="follow">팔로우</p>
							</li>
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
