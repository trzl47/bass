// Libs
import React, { Component } from 'react';
// styles
import '../../static/css/footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className="getbass">
				<h3>Bass</h3>
				<ul>
					<li><a href="/#">Install</a></li>
					<li><a href="/#">Mobile</a></li>
				</ul>
			</div>
			<div className="aboutbass">
				<h3>About</h3>
				<ul>
					<li><a href="/#">Blog</a></li>
					<li><a href="/#">Team</a></li>
					<li><a href="/#">Jobs</a></li>
				</ul>
			</div>
			<div className="helpbass">
				<h3>Support</h3>
				<ul>
					<li><a href="/#">Help Center</a></li>
					<li><a href="/#">Get Started</a></li>
					<li><a href="/#">Contact Us</a></li>
				</ul>
			</div>
			<div className="communitybass">
				<h3>Community</h3>
				<ul>
					<li><a href="/#">Facebook</a></li>
					<li><a href="/#">Twitter</a></li>
					<li><a href="/#">Google+</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;