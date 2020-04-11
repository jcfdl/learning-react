import React, { Component, PropTypes } from 'react';
import { UserConsumer } from './UserContext'


class ComponentF extends Component {
    render() {
        return (
        		<UserConsumer>
	            	{username => {
	            		return <h1>{username}</h1>
	            	}}
            </UserConsumer>
        );
    }
}

export default ComponentF;
