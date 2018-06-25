// Libs
import React, { Component } from 'react';
// Components
import Banner from './Banner.js';
import AboutSupporting from './About.js';
import Download from './Download.js';

export default class Home extends Component {
	render() {
		return(
			<div className='bass'>
				<Banner />
				{/* <AboutSupporting /> */}
				{/* <Download /> */}
			</div>
		);
	}
}
