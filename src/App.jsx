import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				Hello {cordova.platformId}!!!
			</div>
		);
	}
}

export default App;