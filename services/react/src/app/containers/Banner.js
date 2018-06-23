// Libs
import React from 'react';

const Header = () => {
		return (
			<header>
				<div className='jumbotron'>
					<div className='container'>
						<div className='header'>
							<div className='row'>
								<div className="col-md-3">
									<img alt='' className='logo' src={require('../../static/img/logo.svg')} width="106" height="75" />
								</div>
								<div className="col-md-9">
									<ul className='pull-right'>
										<li><a href="bass.tbrownkcdev.com">Features</a></li>
										<li><a className={['btn','btn-default'].join(' ')} href="bass.tbrownkcdev.com">Download</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className='main'>
							<div className='row'>
								<div className="col-md-7">
									<h1>Turn Up the Bass</h1>
									<p>From the newest releases to classic albums, we have the best music for you to enjoy.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	};

export default Header;
