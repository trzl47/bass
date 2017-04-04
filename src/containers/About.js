import React, { Component } from 'react';
import InfoBarA from '../components/infobarA.js';
import InfoBarB from '../components/infobarB.js';
import infopanels from '../components/infopanels.js';

class AboutSupporting extends Component {
	render() {
		const infobarContent = infopanels.Home;
		let infobarA = [];
		let infobarB = [];
		infobarContent.forEach(function(obj) {
			obj.id % 2 === 0 ?
				infobarA.push(obj)
				:
				infobarB.push(obj);
		});
    infobarA = infobarA.map((infobar) => {
      return <InfoBarA title={infobar.title}
										desc={infobar.description}
										img={infobar.img}
                    key={infobar.id} />
    });
		infobarB = infobarB.map((infobar) => {
      return <InfoBarB title={infobar.title}
										desc={infobar.description}
										img={infobar.img}
                    key={infobar.id} />
    });
    return (
				<div className="about">
					{ infobarA.concat(infobarB).sort(function(a, b){ return a.key - b.key }) }
				</div>
    );
  }
}

export default AboutSupporting;
