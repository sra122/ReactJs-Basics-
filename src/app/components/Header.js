import React from "react";
import { render } from "react-dom";

export class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age : props.initialAge
		}
	}

	addAge() {
		this.setState({
			age: this.state.age + 3
		});
	}
	render() {
		return(
			<div>
				<p>Hello { this.props.name }</p>
				<p>Your Age is { this.state.age }</p>
				<button onClick={ () => this.addAge() }>Increase age</button>
			</div>
			);
	}
}

