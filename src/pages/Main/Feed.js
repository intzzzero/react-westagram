import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Feed.scss';
import profile from '../../Images/profile.jpeg';

import { storiesData } from './dummydata.js';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stories: storiesData
		};
	}
	render() {
		return (
			<main className="Feed">
				<div className="feed-container">
					<Story stories={this.state.stories} />
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
					{this.props.stories.map(story => (
						<li>
							<div className="img-wrapper">
								<img src={story.src} alt={story.name} />
							</div>
							<p>{story.name}</p>
						</li>
					))}
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
	constructor(props) {
		super(props);

		this.state = {
			comments: [],
			text: '',
			like: 0
		};
	}

	clickedHeart = () => {
		this.setState({
			like: this.state.like + 1
		});
	};

	writeComment = e => {
		this.setState({
			text: e.target.value
		});
	};

	addComment = e => {
		e.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}
		const newComment = {
			text: this.state.text,
			id: Date.now(),
			dateAndTime: new Date().toLocaleDateString() + new Date().toLocaleTimeString()
		};
		this.setState(state => ({
			comments: state.comments.concat(newComment),
			text: ''
		}));
	};

	deleteComment = e => {
		const selectedComment = e.target.getAttribute('value');
		console.log(selectedComment);
		this.setState({
			comments: this.state.comments.filter(comment => comment.id !== Number(selectedComment))
		});
		console.log(this.state.comments);
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
			<article className="FeedText">
				<div className="icon-wrapper">
					<div className="left-icons">
						<FontAwesomeIcon
							className="heart-icon"
							icon={faHeart}
							onClick={this.clickedHeart}
							style={
								this.state.like !== 0 ? { color: 'rgb(255, 87, 87)' } : { color: 'rgba(0, 0, 0, 0.7)' }
							}
						/>
						<FontAwesomeIcon className="comment-icon" icon={faComment} />
						<FontAwesomeIcon className="paperplane-icon" icon={faPaperPlane} />
					</div>
					<div className="right-icons">
						<FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />
					</div>
				</div>
				<div className="text-wrapper">
					<p>좋아요 {this.state.like} 개</p>
					<CommentsContainer comments={this.state.comments} onClick={this.deleteComment} />
				</div>
				<form className="new-comment">
					<input
						className="input-comment"
						type="text"
						placeholder="댓글 달기..."
						value={this.state.text}
						onChange={this.writeComment}
					/>
					<button
						className="upload-comment-btn"
						type="submit"
						style={this.state.text ? abledBtn : disabledBtn}
						onClick={this.addComment}
					>
						게시
					</button>
				</form>
			</article>
		);
	}
}

class CommentsContainer extends React.Component {
	render() {
		return (
			<ul className="comment-container">
				{this.props.comments.map(comment => (
					<li className="comment" key={comment.id}>
						<span>
							{comment.text}
							<span className="comment-time"> - {comment.dateAndTime}</span>
						</span>
						<span type="button" value={comment.id} className="comment-delete" onClick={this.props.onClick}>
							삭제
						</span>
					</li>
				))}
			</ul>
		);
	}
}

export default Feed;
