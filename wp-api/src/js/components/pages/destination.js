import React, { Component } from 'react';
import DestinationDetail from '../modules/destinationDetail';

class Destination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destination: []
        }
    }

    getDestination(slug) {
    	$('.ts-spinner').fadeIn(300);
        var url = `http://localhost/tut/reactjs/travel/wp-site/wp-json/wp/v2/destinations/?slug=${slug}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    destination: data
                })
            })
    }

    componentWillMount() {
        this.getDestination(this.props.params.slug);
    }

    componentWillReceiveProps(nextProps) {
        this.getDestination(nextProps.params.slug);
    }

    componentDidUpdate() {
        setTimeout(() => { $('.ts-spinner').fadeOut(300) }, 800);
    }

    render() {
    	if(this.state.destination[0]){
    		return ( 
	        	<DestinationDetail detail={this.state.destination[0]} /> 
	    	);
    	} 
    	else{
    		return false;
    	}
        
    }
}

export default Destination;
