import React from 'react';
import Nav from './Nav';
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
			</div>
		);
	}
}

export default Main;
