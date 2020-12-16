import React, {Component} from 'react';
// import ttc from './tic-tac-toe.jpg'
import './Homepage.css';
import {withRouter} from 'react-router-dom';

class Homepage extends Component {
	setNumberOfPlayers = (e, num) => {
		if(num===1) {
			e.preventDefault();
			// e.currentTarget.reset();
			let url = `/singlePlayer`;
			this.props.history.push(url);
		}
		else {
			e.preventDefault();
			// e.currentTarget.reset();
			let url = `/doublePlayer`;
			this.props.history.push(url);
		}
	}

	render() {
		console.log(this.props)
		return (
			<div className="num_pep">
				<div>
					<h1>Hello There</h1>
				</div>
				<div>
					<h3>Please Choose Number Of Players</h3>
				</div>

				<button className="button" id="1" onClick={e => this.setNumberOfPlayers(e, 1)}>Single Player</button>
				<button className="button" id="2" onClick={e => this.setNumberOfPlayers(e, 2)}>Two Players</button>				
			</div>
		)
	}
}

export default Homepage;