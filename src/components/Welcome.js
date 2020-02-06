import React, { Component } from 'react'

class Welcome extends Component {
	render() {
		const {name, schoolName, children} = this.props
		// const {state1, state2} = this.state
		return (
			<div>
				<h1>Welcome {name} from School: {schoolName}</h1>

				{children}
			</div>
		)
	}
}

export default Welcome