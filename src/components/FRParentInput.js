import React, { Component, PropTypes } from 'react';
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
    	this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
            	<FRInput ref={this.inputRef} />
            	<button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

export default FRParentInput;