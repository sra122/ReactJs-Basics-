import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		return(
			<div className="container">
				<h1>Hello!</h1>
				<Header/>
				<Footer/>
			</div>
			);
	}
} 

class Header extends React.Component {
	render() {
		return(
			<div>
			<h1>Bye!</h1>
			</div>
			);
	}
}

class Footer extends React.Component {
	render() {
		return(
			<div>
				<h1>Footer</h1>
			</div>
			);
	}
}

render(<App/>, window.document.getElementById('app'));