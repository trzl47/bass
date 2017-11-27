// Libs
import React, { Component } from 'react';
// Components

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='container'>
					<div className='row'>
						<div className="col-md-2">
							<h3>Bass</h3>
							<ul>
								<li><a href="">Install</a></li>
								<li><a href="">Mobile</a></li>
							</ul>
						</div>
						<div className="col-md-2">
							<h3>About</h3>
							<ul>
								<li><a href="">Blog</a></li>
								<li><a href="">Team</a></li>
								<li><a href="">Jobs</a></li>
							</ul>
						</div>
						<div className="col-md-2">
							<h3>Support</h3>
							<ul>
								<li><a href="">Help Center</a></li>
								<li><a href="">Get Started</a></li>
								<li><a href="">Contact Us</a></li>
							</ul>
						</div>
						<div className="col-md-2">
							<h3>Community</h3>
							<ul>
								<li><a href="">Facebook</a></li>
								<li><a href="">Twitter</a></li>
								<li><a href="">Google+</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
