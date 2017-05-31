import React, {Component} from 'react';

class DestinationDetail extends Component {
	render() {
		var data = this.props.detail;
		return(
			<div className="destination-detail">
				<div className="container">
					<h1>{data.name}</h1>
					<div className="destination-banner">
						<img src={data.acf.image} alt={data.name} />
					</div> 
					<div className="description" dangerouslySetInnerHTML={ {__html: data.description} } />
				</div>
			</div>
		); 
	}
}

export default DestinationDetail;