import React, { Component, PropTypes } from 'react';
import withCounter from './withCounter'

class CounterTwo extends Component {

		constructor(props) {
        super(props);

        this.state = {
        	count: 0
        }
    }

    incrementCount = () => {
    	this.setState(prevState => {
    		return {count: prevState.count + 1}
    	})
    }

    render() {
        return (
            <>
           {this.props.render(this.state.count, this.incrementCount)}
           </>
        );
    }
}

export default CounterTwo;
