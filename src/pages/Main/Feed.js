import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Feed.scss';
import profile from '../../images/profile.jpeg';

class Feed extends React.Component {
	render() {
		return (
			<main className="Feed">
				<div className="feed-container">
					<Story />
					<div className="feed-wrapper">
						<FeedHeader />
						<FeedImg />
						<FeedText />
					</div>
				</div>
			</main>
		);
	}
}

class Story extends React.Component {
	render() {
		return (
			<article className="Story">
				<ul className="stories-list">
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hmse3_ToICWgVX_O6z-NwwHaHa%26pid%3DApi&f=1"
								alt="kakao ryan"
							/>
						</div>
						<p>ryan</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sWvorNO_FVyqscBLuzj9iwHaHa%26pid%3DApi&f=1"
								alt="kakao apeach"
							/>
						</div>
						<p>apeach</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aTZqAvH5boZT8FDcZ90UDwAAAA%26pid%3DApi&f=1"
								alt="kakao neo"
							/>
						</div>
						<p>neo</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qPX8HqKXF1OCCLv6Hhl2OQAAAA%26pid%3DApi&f=1"
								alt="kakao muji"
							/>
						</div>
						<p>muji</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9KPuQhrDJmGw_aNemfKtgHaH7%26pid%3DApi&f=1"
								alt="kakao tube"
							/>
						</div>
						<p>tube</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sECTx4MzbXBhq9Re42vpRQHaH7%26pid%3DApi&f=1"
								alt="kakao couple"
							/>
						</div>
						<p>rainyday</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QX-N6MI6SnnQueB8eKeFLQHaHa%26pid%3DApi&f=1"
								alt="kakao theater"
							/>
						</div>
						<p>moviemania</p>
					</li>
					<li>
						<div className="img-wrapper">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9KPuQhrDJmGw_aNemfKtgHaH7%26pid%3DApi&f=1"
								alt="kakao tube"
							/>
						</div>
						<p>tube</p>
					</li>
				</ul>
			</article>
		);
	}
}

class FeedHeader extends React.Component {
	render() {
		return (
			<header className="FeedHeader">
				<div className="posting-user">
					<img src={profile} alt="profile" />
					<div className="username-wrapper">
						<p className="nickname">aprilgreenery</p>
						<p className="location">Goyang</p>
					</div>
					<FontAwesomeIcon className="three-dots-icon" icon={faEllipsisH} />
				</div>
			</header>
		);
	}
}

class FeedImg extends React.Component {
	render() {
		return (
			<article className="FeedImg">
				<img
					src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91956183_2460045120923081_8317236874354968028_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=I9ZWmyau2esAX9jqRdi&oh=4fb4f67861ba053c94120b3fcfcb9ea2&oe=5EFFB910"
					alt="feed img cat"
				/>
			</article>
		);
	}
}

class FeedText extends React.Component {
	render() {
		return (
			<article className="FeedText">
				<div className="icon-wrapper">
					<div className="left-icons">
						<FontAwesomeIcon className="heart-icon" icon={faHeart} />
						<FontAwesomeIcon className="comment-icon" icon={faComment} />
						<FontAwesomeIcon className="paperplane-icon" icon={faPaperPlane} />
					</div>
					<div className="right-icons">
						<FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />
					</div>
				</div>
				<div className="text-wrapper">
					<p>좋아요 {/*좋아요 카운트 함수 추가 예정*/}개</p>
					<ul className="comment-container">{/*댓글 추가될 곳*/}</ul>
				</div>
				<div className="new-comment">
					<input className="input-comment" type="text" placeholder="댓글 달기..." />
					<button className="upload-comment-btn" type="submit" disabled="disabled">
						게시
					</button>
				</div>
			</article>
		);
	}
}

export default Feed;
