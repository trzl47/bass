import React from 'react';

const InfoBarB = props => (
    <div className="infobar infobarB">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2>{props.title}</h2>
						<p>{props.desc}</p>
					</div>
					<div className="col-md-6">
						<img alt='' role='presentation' src={props.img} width="450" height="300" />
					</div>
				</div>
			</div>
    </div>
);

export default InfoBarB;
