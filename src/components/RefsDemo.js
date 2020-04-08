import React, { Component, PropTypes } from 'react';

class RefsDemo extends Component {   
    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
        	this.cbRef = element
        }
    }

    componentDidMount() {
    	if(this.cbRef) {
    		this.cbRef.focus()
    	}
    	// this.inputRef.current.focus()
    }

    render() {
        return (
        	<>
            <input type='text' ref={this.inputRef} />
            <input type='text' ref={this.setCbRef} />
          </>
        );
    }
}

export default RefsDemo;
