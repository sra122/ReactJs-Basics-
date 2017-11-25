import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "John"
		}
	}
	onGreet() {
		alert("Hello!");
	}

	changeName(newName) {
		this.setState({
			name: newName
		});
	}

	

	render() {
		return(
			<div className="container">
				<Header name={this.state.name} initialAge={24} greet={this.onGreet} changeName = {this.changeName.bind(this)}/> {/*Props*/}
				<Home  />
			</div>
			);
	}
} 
render(<App/>, window.document.getElementById('app'));