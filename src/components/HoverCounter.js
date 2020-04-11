import React, { Component, PropTypes } from 'react';
import withCounter from './withCounter'

class HoverCounter extends Component {    

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
            	<h1 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h1>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 3);
