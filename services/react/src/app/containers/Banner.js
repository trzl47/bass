// Libs
import React from 'react';
// styles
import '../../static/css/banner.css';

const Banner = () => {
	return (
		<header>
			<div className='jumbotron'>
				<div className='header'>
					<img alt='' className='logo' src={require('../../static/img/logo.svg')} width="106" height="75" />
					<ul className='pull-right'>
						<li><a href="bass.tbrownkcdev.com">Features</a></li>
						<li><a className='btn' href="bass.tbrownkcdev.com">Download</a></li>
					</ul>
				</div>
				<div className='banner'>
					<h1>Turn Up the Bass</h1>
					<p>From the newest releases to classic albums, we have the best music for you to enjoy.</p>
				</div>
			</div>
		</header>
	);
};

export default Banner;