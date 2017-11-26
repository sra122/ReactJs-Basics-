import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "John",
			newName: "Sravan",
			college: "FH"
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

	changeCollege(newCollegeName) {
		this.setState({
			college: newCollegeName.target.value
		});
	}


	render() {
		return(
			<div className="container">
				<Header name={this.state.name} 
						initialAge={24} 
						greet={this.onGreet} 
						changeName={this.changeName.bind(this)}
						changeByInput = {this.state.name}/> {/*Props*/}
				<Home  printName= {this.state.newName} changeCollege={this.state.college}/><br/>
				<input type="text" 
						value={this.state.college} 
						onChange={(event) => this.changeCollege(event)} />

			</div>
			);
	}
} 
render(<App/>, window.document.getElementById('app'));