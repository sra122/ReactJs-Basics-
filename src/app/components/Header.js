import React from "react";
import { render } from "react-dom";

export class Header extends React.Component {
	render() {
		return(
			<div>
				<h1>Header</h1>
				<div>Your name is {this.props.name} and studing in {this.props.college} </div>
				<h1>{this.props.college}</h1>
			</div>
			);
	}
}

