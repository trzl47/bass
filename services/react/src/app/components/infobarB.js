import React from 'react';
// styles
import '../../static/css/infobarB.css';

const InfoBarB = props => (
	<div className="infobar infobarB">
		<div className="info">
			<h2 className='info-header'>{props.title}</h2>
			<p className='info-content'>{props.desc}</p>
		</div>
		<img className='info-image' alt='' src={props.img} />
	</div>
);

export default InfoBarB;