// Libs
import React, { Component } from 'react';
// Components
// styles
import '../../static/css/download.css';


const Download = () => {
	return (
		<div className='download'>
			<h2 className='dl-header'>Try it now</h2>
			<div className='stores'>
				<a href="bass.tbrownkcdev.com"><img alt='' src={require('../../static/img/app-store.png')} /></a>
				<a href="bass.tbrownkcdev.com"><img alt='' src={require('../../static/img/google-play.png')} /></a>
			</div>
		</div>
	);
};

export default Download;