import React from 'react';
import Nav from './Nav';
import Feed from './Feed';
import Recommend from './Recommend';
import '../../styles/Main.scss';

class Main extends React.Component {
	render() {
		return (
			<main className="Main">
				<Feed />
				<Nav />
				<Recommend />
			</main>
		);
	}
}

export default Main;
