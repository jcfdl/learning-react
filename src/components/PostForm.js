import React, { Component, PropTypes } from 'react';
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	userId: '',
        	title: '',
        	body: ''
        }
    }

    changeHandler = (e) => {
    	this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = e => {
    	e.preventDefault();
    	console.log(this.state)
    	axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    	.then(response => {
    		console.log(response)
    	}).catch(error => {
    		console.log(error)
    	})

    }

    render() {
    	// we can use formic
    		const {userId, title, body} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
			    		<div>
				    		<input type='text' name='userId' value={userId} onChange={this.changeHandler} />
				    	</div>
				    	<div>
				    		<input type='text' name='title' value={title} onChange={this.changeHandler} />				    		
				    	</div>
				    	<div>
				    		<input type='text' name='body' value={body} onChange={this.changeHandler} />				    		
				    		
				    	</div>
				    	<div>
				    		<button type='submit'>Button</button>
				    	</div>
			    	</form>
        );
    }
}

export default PostForm;
