import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			newName: props.printName
		}

	}

	printName(event) {

		this.setState({
			newName: event.target.value
		});

	} 

	render() {
		return(
			<div>
				<h1>Home</h1>
				<p> {this.state.newName} </p>
				<input type="text" value={this.state.newName} onChange={(event) => this.printName(event) }/>
				<p>{this.props.changeCollege}</p>
			</div>
			);
	}
}

