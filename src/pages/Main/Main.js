import React from 'react';
import Nav from './Nav';
import Feed from './Feed';
import '../../styles/Main.scss';

class Main extends React.Component {
	render() {
		return (
			<main className="Main">
				<Nav />
				<Feed />
			</main>
		);
	}
}

export default Main;
