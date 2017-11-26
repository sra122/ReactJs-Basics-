import React from "react";
import { render } from "react-dom";
import protoTypes from "prop-types";

export class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age : props.initialAge,
			name: props.changeByInput
		}
	}

	addAge() {
		this.setState({
			age: this.state.age + 3
		});
	}

	changeTitle() {
		this.props.changeName(this.state.name);
	}

	changeByInput(event) {
		this.setState({
			name : event.target.value
		});
	}
	
	render() {
		return(
			<div>
				<p>Hello { this.props.name }</p>
				<p>Your Age is { this.state.age }</p>
				<input type="text" value={this.state.name} onChange={(event) =>this.changeByInput(event)}/>
				<button onClick={ () => this.addAge() }>Increase age</button>
				<button onClick={this.props.greet}>Greet</button>
				<button onClick={this.changeTitle.bind(this)}>Change Name</button>

			</div>
			);
	}
}


Header.ProtoTypes = {
	name: protoTypes.string,
	age: protoTypes.number,
	greet: protoTypes.func
}