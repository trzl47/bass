// Libs
import React, { Component } from 'react';
// Components

export default class Download extends Component {
	render() {
		return (
			<div className='download'>
				<div className='container'>
					<h2>Try it now</h2>
					<a href=""><img alt='' role='presentation' src={require('./assets/app-store.png')} /></a>
					<a href=""><img alt='' role='presentation' src={require('./assets/google-play.png')} /></a>
				</div>
			</div>
		);
	}

}
