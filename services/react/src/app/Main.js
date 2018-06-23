//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Home from './containers/Home.js';
import Footer from './containers/Footer.js';
import NotFound from './NotFound';
// styles
import '../static/css/reset.css';
import '../static/css/bass.css';
// import '../static/css/index.css';

class Main extends Component {
	render() {
		return (
			<div className='main'>
				<Switch>
					<Route exact={true} pattern="/" component={Home} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;