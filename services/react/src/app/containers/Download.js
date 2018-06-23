// Libs
import React, { Component } from 'react';
// Components

export default class Download extends Component {
	render() {
		return (
			<div className='download'>
				<div className='container'>
					<h2>Try it now</h2>
					<a href="bass.tbrownkcdev.com"><img alt='' src={require('../../static/img/app-store.png')} /></a>
					<a href="bass.tbrownkcdev.com"><img alt='' src={require('../../static/img/google-play.png')} /></a>
				</div>
			</div>
		);
	}

}
