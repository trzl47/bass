import React from 'react';
// styles
import '../../static/css/infobarA.css';

const InfoBarA = props => (
	<div className="infobarA">
		<img className='info-image' alt='' src={props.img} />
		<div className="info">
			<h2 className='info-header'>{props.title}</h2>
			<p className='info-content'>{props.desc}</p>
		</div>
	</div>
);

export default InfoBarA;