import React from 'react';
import Nav from './Nav';
import Feed from './Feed';
import '../../index.css';
import './Main.css';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Main">
				<Nav />
				<Feed />
			</div>
		);
	}
}

export default Main;
