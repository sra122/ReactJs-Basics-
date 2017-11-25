import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
	render() {
		let content = "";
		if(true)
		{
			content = <h1>Content</h1>
		}
		
		
			
		
		return(
			<div className="container">
				<h1>Hello!</h1>
				<Header name={"Sravan"} college={"Fh Kiel"}/> {/*Props*/}
				<Home/>	
				<div>{2*24}</div> {/*Line break can be created by using div tag*/} 
				<div>{"Sravan"}</div>
				{content}
				{1==2 ? "Yes":"No"}
			</div>
			);
	}
} 
render(<App/>, window.document.getElementById('app'));