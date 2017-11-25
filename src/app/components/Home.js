import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	render() {
		return(
			<div>
				<h1>Home</h1>
				<h1>{this.props.detail.name}</h1>
				<hr/>
				{this.props.children}
			</div>
			);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.array,
	children: PropTypes.element.isRequired
}